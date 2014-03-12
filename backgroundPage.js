debugger;
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if(request.command == "getFileItems")
        sendResponse({fileItems: 123});
    }
);