chrome.extension.onMessage.addListener(onRequest);

chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript(tab.id, {file:'redirectCheck.js'}, function () {
        


        chrome.tabs.sendMessage(tab.id, {});
    });
});

function onRequest(request, sender, callback) {
    
    return true;
}