


function createStyle(){
	var style = document.createElement("style");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("type", "text/css");
    document.getElementsByTagName("head")[0].appendChild(style);
    style.appendChild(document.createTextNode('.RLC_reprot_container{   font: normal normal 12px "Source Sans Pro", Arial, Tahoma, Helvetica, FreeSans, sans-serif;  font-size: 15px;   background-color: #f7f7f9a;border: 1px solid #e1e1e8;background-clip: padding-box;box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);position:fixed;right:20px;top:20px;width:300px;background-color:white;z-index:1000000000000}'));
    
    style.appendChild(document.createTextNode("#RLC_progressBarContainer{padding:15px;font-size: 15px;  }"));

	style.appendChild(document.createTextNode('#RLC_progressBarContainer:after{visibility: hidden;display: block;font-size: 0;content: " ";clear: both;height: 0;;}'));
	style.appendChild(document.createTextNode(".RLC_reprot_container table{margin:15px;margin-top:0px;width: 100%;width:270px;border-collapse: collapse;}"));
	style.appendChild(document.createTextNode(".RLC_reprot_container tr{height:40px;font-size: 15px;  }"));
	style.appendChild(document.createTextNode(".RLC_reprot_container td{border :1px solid #ccc;padding-left:6px;width:134px;font-size: 15px;  }"));


   	style.appendChild(document.createTextNode(".RLC_Ok,.RLC_Start.RLC_Ok{border-radius: 4px;color: #fff!important;border-color: #4cae4c;background-color:#5cb85c!important;}"));
	style.appendChild(document.createTextNode(".RLC_Redirect,.RLC_Start.RLC_Redirect{border-radius: 4px;color: #fff!important;border-color: #eea236!important;background-color: #f0ad4e!important;}"));
	style.appendChild(document.createTextNode(".RLC_Fail, .RLC_Start.RLC_Fail{   border-radius: 4px; border-color: #d43f3a;color: #fff!important;background-color:#d9534f!important;}"));
	style.appendChild(document.createTextNode(".RLC_Start{border-radius: 4px;background-color:black;!important}"));

	style.appendChild(document.createTextNode(".RLC_reprot_container .RLC_Redirect,.RLC_reprot_container .RLC_Fail,.RLC_reprot_container .RLC_Ok{ padding: 6px 12px; display: inline-block;  }"));
	
    style.appendChild(document.createTextNode("#RLC_header{border-bottom: 1px solid #e5e5e5;padding: 15px;min-height: 15.px;}"));
    style.appendChild(document.createTextNode(".RLC_close{cursor:pointer;background-size:100%;position:absolute;right:10px;top:13px;width: 20px;height: 20px;background-repeat: no-repeat;background-image: url(data:image/png;base64,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);}"));

	style.appendChild(document.createTextNode("#RLC_percent{width:50px;float:left;margin-left:10px;}"));

	style.appendChild(document.createTextNode('.RLC_reprot_container progress[value]{-webkit-appearance: none;appearance: none;width: 200px;float:left;height: 20px;}'));
	
	style.appendChild(document.createTextNode('.RLC_reprot_container progress[value]::-webkit-progress-value{background-image:-webkit-linear-gradient(-45deg,transparent 33%,rgba(0,0,0,.1) 33%,rgba(0,0,0,.1) 66%,transparent 66%),-webkit-linear-gradient(top,rgba(255,255,255,.25),rgba(0,0,0,.25)),-webkit-linear-gradient(left,#09c,#f44);border-radius:2px;background-size:35px 20px,100% 100%,100% 100%;-webkit-animation: animate-stripes 5s linear infinite;animation: animate-stripes 5s linear infinite;}'));
}

var isCreate = false;
function createReport(){
	var newdiv = document.createElement("DIV");
	newdiv.setAttribute("class", "RLC_reprot_container");
	newdiv.setAttribute("id", "RLC_content");

	var header = document.createElement("DIV");
	header.setAttribute("id", "RLC_header");
	header.appendChild(document.createTextNode("Redirect Link Checker"));
	newdiv.appendChild(header);
	var close = document.createElement("I");
	close.setAttribute("class", "RLC_close");
	newdiv.appendChild(close);

	close.addEventListener("click",function(ele){
		
		var elem=document.getElementById("RLC_content")
		elem.parentNode.removeChild(elem);

		console.log('uu');
	})


	var table = document.createElement("table");
	var tr_0 = document.createElement("tr");
	var tdLink = document.createElement("td");
	var tdQueue = document.createElement("td");
	tdLink.innerHTML=0;
	tdQueue.innerHTML = 0;
	tdQueue.setAttribute("id", "RLC_tdQueue");
	tdLink.setAttribute("id", "RLC_tdLink");
	table.appendChild(tr_0);

	tr_0.appendChild(tdLink);
	tr_0.appendChild(tdQueue);

	var tr0 = document.createElement("tr");
	var td0 = document.createElement("td");
	var tdOk = document.createElement("td");
	tdOk.innerHTML=0;
	tdOk.setAttribute("id", "RLC_tdOk");
	table.appendChild(tr0);
	
	tr0.appendChild(td0);
	tr0.appendChild(tdOk);
	
	var node = document.createElement("div");
	node.setAttribute("class", "RLC_Ok");
	node.appendChild(document.createTextNode("OK"));
	td0.appendChild(node);

	var tr1 = document.createElement("tr");
	var td1 = document.createElement("td");
	var tdRedirect = document.createElement("td");
	tdRedirect.innerHTML = 0;
	tdRedirect.setAttribute("id", "RLC_tdRedirect");
	table.appendChild(tr1);
	tr1.appendChild(td1);
	//tr1.setAttribute("class", "RLC_Redirect");
	tr1.appendChild(tdRedirect);

	var node = document.createElement("div");
	node.setAttribute("class", "RLC_Redirect");
	node.appendChild(document.createTextNode("Redirect"));
	td1.appendChild(node);



	var tr2 = document.createElement("tr");
	var td2 = document.createElement("td");
	var tdFail = document.createElement("td");
	tdFail.innerHTML = 0;
	tdFail.setAttribute("id", "RLC_tdFail");
	table.appendChild(tr2);
	tr2.appendChild(td2);
	tr2.appendChild(tdFail);
	//tr2.setAttribute("class", "RLC_Fail");

	var node = document.createElement("div");
	node.setAttribute("class", "RLC_Fail");
	node.appendChild(document.createTextNode("Fail"));
	td2.appendChild(node);
	var progressBarContainer = document.createElement("DIV");
	progressBarContainer.setAttribute("id","RLC_progressBarContainer");

	var progressBar  = document.createElement("PROGRESS");
	progressBar.setAttribute("max","100");
	progressBar.setAttribute("id","RLC_progressbar");
	progressBar.setAttribute("value","80");
	progressBarContainer.appendChild(progressBar);
	var percent  = document.createElement("div");
	percent.setAttribute("id","RLC_percent");
	progressBarContainer.appendChild(percent);
	newdiv.appendChild(progressBarContainer);
	newdiv.appendChild(table);
	
	document.body.appendChild(newdiv);
	
	return {newdiv:newdiv,
		tdQueue:tdQueue,
		tdLink:tdLink,
		progressBar:progressBar,
		percent:percent,
		tdOk:tdOk,
		tdRedirect:tdRedirect,
		tdFail:tdFail

	};
}

function getReport(){

	var result = {newdiv:document.getElementById("RLC_content"),
		tdQueue:document.getElementById("RLC_tdQueue"),
		tdLink:document.getElementById("RLC_tdLink"),
		progressBar:document.getElementById("RLC_progressbar"),
		percent:document.getElementById("RLC_percent"),
		tdOk:document.getElementById("RLC_tdOk"),
		tdRedirect:document.getElementById("RLC_tdRedirect"),
		tdFail:document.getElementById("RLC_tdFail")

	};

	return result;

}

chrome.extension.onMessage.addListener(function(){
	var report;
	var id = document.getElementById("RLC_content");
	if(!id){
		
		createStyle();
		report = createReport();
	}else{
		report = getReport();
	}
	var count =0;
	var total = 0,queue=0;
	var okCount=0;
	var redirectCount=0;
	var failCount =0;
	var links = document.getElementsByTagName("a");
	var checkLinks=[];
	Array.prototype.map.call(links,function(ele){})
	
	var filterLinks = [];
	Array.prototype.forEach.call(links,function(ele){
		var url = ele.href;
		if(!url) return;
		if(url.indexOf("#")==url.length-1){
           
        }else if ((url.length <= 0)  || (url.startsWith('http')===false)){
      		
      	}else{
        	filterLinks.push(ele);
			
		}
	});
    total = filterLinks.length;
    queue = total;
    report.tdLink.innerHTML =  "Total "+ total + " links";
    report.tdQueue.innerHTML =  queue + "links left" ;
	filterLinks.forEach(function(ele){
		ele.className = ele.className + " RLC_Start";
		var url = ele.href;
		
		chrome.extension.sendMessage({"action": "check", "url": url,"num":filterLinks.length},function (response) {
			if(response.status <=200){
				//ele.style['background-color']='green';
				ele.className = ele.className + " RLC_Ok";
				okCount++;
				report.tdOk.innerHTML = okCount;
			}else if(response.status <400){
				//ele.style['background-color']='blue';
				ele.className = ele.className + " RLC_Redirect";
				ele.title =  url+ " | "+response.message;
				redirectCount++;
				report.tdRedirect.innerHTML = redirectCount;
				if(checkLinks[url] === undefined){
					console.log("redirect : "+url + " | "+ response.message);
					checkLinks[url] = 1;
				}
			}else{
				
				

				ele.className = ele.className + " RLC_Fail";
				failCount++;
				report.tdFail.innerHTML =failCount;
				if(checkLinks[url] === undefined){
					console.log(response.status+ " : "+url);
					checkLinks[url] = 1;
				}
			}
			count++;
			queue--;
			report.tdQueue.innerHTML = queue + " links left" ;;
			report.percent.innerHTML = Math.floor(100*(count/filterLinks.length))+"%";
			
			report.progressBar.setAttribute('value',Math.floor(100*(count/filterLinks.length)));

			if(queue ==0){

				chrome.extension.sendMessage({"action": "done"},function (response) {
  				});
			}
			
    	});

	})


});