'use strict';

chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({theme: 'nightfall'}, function () {
        console.log('Set theme to nightfall');
    });
});