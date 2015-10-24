

chrome.extension.onMessage.addListener(onRequest);
chrome.browserAction.onClicked.addListener(function (tab) {
     chrome.tabs.executeScript(tab.id, {file:'redirectCheck.js'}, function () {
         chrome.tabs.sendMessage(tab.id, {});
    });
});

var requestPromises = {};
var cache = {};
var publishers = [];


function Observable(){
	this.observers = [];
	this.addObserver = function(callback){
		this.observers.push(callback);
	};
	this.notifyObservers = function(message){
		this.observers.forEach(function(ele){
	    	ele(message);
	    });
	};

}
function getUpdate(cb){
	cb({"total":num,"c":count});
}
function clearData(){
	requestPromises={};
	cache ={};
	publishers =[];
	timeout=10000;
}

function onRequest(request, sender, callback) {	
    if(request.action ==='update'){
    	getUpdate(callback);
    }else if(request.action =='done'){
    	clearData();
    	callback();
	}else if (request.action == "check") { 	

    	if(requestPromises[request.url]===undefined){
    		requestPromises[request.url] = function(){ 
    			var promise = new Promise(function(resolve,reject){
			    	$http(request.url).get().then(function(response){		
		    			resolve(response);
		    		});
	    		});
	    		return promise;
    		}
	    	
	    	requestPromises[request.url]().then(function(response){
	    		callback(response);
	    		cache[request.url] = response;
	    		if(publishers[request.url] !== undefined){
	    			publishers[request.url].notifyObservers(response);
	    		}

	    	});
    	}else{
    		if(cache[request.url] === undefined){
    			if(publishers[request.url] === undefined){
    				publishers[request.url] = new Observable();
    			}
    			publishers[request.url].addObserver(function(response){
    				callback(response);
    			});
    		
    		}else{
    			callback(cache[request.url]);
    		}
    	}
    	//count++;
    }
    return true;

}

var timeout = 10000;

// A-> $http function is implemented in order to follow the standard Adapter pattern
function $http(url){
 
  // A small example of object
  var core = {

    // Method that performs the ajax request
    ajax : function (method, url, args) {

      // Creating a promise
      	var promise = new Promise( function (resolve, reject) {

        // Instantiates the XMLHttpRequest
	        var XMLHttpTimeout,client = new XMLHttpRequest();
	        var uri = url;

	        if (args && (method === 'POST' || method === 'PUT')) {
	          uri += '?';
	          var argcount = 0;
	          for (var key in args) {
	            if (args.hasOwnProperty(key)) {
	              if (argcount++) {
	                uri += '&';
	              }
	              uri += encodeURIComponent(key) + '=' + encodeURIComponent(args[key]);
	            }
	          }
	        }
	        XMLHttpTimeout=setTimeout(function (){
				console.log("TIMEOUT "+ url)
				client.abort();
				resolve(
					{ status:408, message:"timeout",timeout:timeout}
				);
				//return callback({ status:408, message:"timeout"}); 
			}, timeout+=1000);

	        try {
    	
      			client.open(method, uri,true);
	        	client.send();
		    }
		    catch(e){
		    	console.log(url);
      			console.log(e);
		    }
	        
	        client.onload = function () {
	        	clearTimeout(XMLHttpTimeout);
	        	var status = this.status;
	        	if(this.responseURL !== url){
                    status = 302;
                }
	            resolve({status : status,
	          		message : this.responseURL,
	          		timeout:timeout
	          	});
	          	timeout-=1000;
	        };
	        client.onerror = function () {
	        	console.log("errror "+ url);
	        	clearTimeout(XMLHttpTimeout);
	          	//reject(this.statusText);
	          	resolve({status : 400,
	          	message : this.responseURL,
	          	timeout:timeout
	          	});
	          	timeout-=1000;
	      	};
	      	
		});
      // Return the promise
      return promise;
    }
  };

  // Adapter pattern
  return {
    'get' : function() {
      return core.ajax('GET', url);
    }
  };
};
