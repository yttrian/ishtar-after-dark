/*global chrome document*/

'use strict';

chrome.storage.sync.get(['theme'], function (result) {
    var link = document.createElement('link'),
        theme = result.theme;

    if (theme !== undefined && theme !== 'off') {
        link.href = chrome.extension.getURL('/styles/' + theme + '.css');
        link.type = 'text/css';
        link.rel = 'stylesheet';

        document.getElementsByTagName('head')[0].appendChild(link);
    }
});
