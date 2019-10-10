/*global document chrome console*/
/*jslint this: true*/

'use strict';

document.addEventListener("DOMContentLoaded", function () {
    chrome.storage.sync.get(['theme'], function (result) {
        document.getElementById('theme').value = result.theme;
    });
});

document.getElementById('theme').onchange = function () {
    var value = this.value;
    chrome.storage.sync.set({theme: value}, function () {
        console.log('Set theme to ' + value);
    });
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
        chrome.tabs.executeScript(arrayOfTabs[0].id, {'code': 'applyTheme("' + value + '")'});
    });
};