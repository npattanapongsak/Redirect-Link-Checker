chrome.extension.onMessage.addListener(function(){

console.log("DO Stuff");
var links = document.getElementsByTagName("a");

Array.prototype.map.call(links,function(ele){ele.style['color']='red';})


console.log(links.length);
});