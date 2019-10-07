/*global chrome document*/

'use strict';

chrome.storage.sync.get(['theme'], function (result) {
    applyTheme(result.theme);
});

function applyTheme(theme) {
    var link = document.getElementById('after-dark');

    if (!link) {
        link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.id = 'after-dark';
    }

    link.href = chrome.extension.getURL('/styles/' + theme + '.css');
    
    if (theme !== undefined && theme !== 'off') {
        document.getElementsByTagName('head')[0].appendChild(link);
    } else {
        link.remove();
    }
}