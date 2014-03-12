chrome.runtime.sendMessage({command: "getFileItems"}, function(response) {
    var fileItems = response.fileItems;
    alert(fileItems);
});