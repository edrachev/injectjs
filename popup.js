// TODO incognito mode
// TODO big storage, more than 5 mb (indexdb, localforage, e.g.)
// TODO saving after reading all files, by promises, Q
// TODO templating

var fileItems = [];
var filesKey = "inject-files";

// now it is sync, it is temporary
function loadFiles() {
    var fileItemsString = localStorage.getItem(filesKey);
    fileItems = JSON.parse(fileItemsString);
};

// now it is sync, it is temporary
function saveFiles() {
    var fileItemsString = JSON.stringify(fileItems);
    localStorage.setItem(filesKey, fileItemsString);
};

document.addEventListener('DOMContentLoaded', function() {
    loadFiles();
    
    document.querySelector("#addFile").addEventListener("change", function(event) {
        var files = Array.prototype.slice.call(event.target.files);
        files.forEach(function(file) {
            readFile(file, function(text) {
                fileItems.push({name: file.name, text: text});
                saveFiles();
            });
        });
    });
});

function readFile(file, callback) {
    var fileReader = new FileReader();
    fileReader.onload = function() {
        callback(fileReader.result);
    };
    fileReader.readAsText(file);
}

function() inject {}