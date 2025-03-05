
isEnabled = false;
const proxyConfig = {
    mode: "fixed_servers",
    rules: { singleProxy: { scheme: "http", host: "127.0.0.1", port: 8080 }},
};


chrome.action.onClicked.addListener(()=>{
    isEnabled ^= 1;
    if(isEnabled){
        chrome.proxy.settings.set({value: proxyConfig, scope: 'regular'}, function() { console.log("Proxy enabled"); });
        chrome.action.setIcon({path: "icons/icon16.png"});
    } else {
        chrome.proxy.settings.set({value: {mode: "direct"}, scope: "regular"}, function() {console.log("Proxy disabled");});
        chrome.action.setIcon({path: "icons/icon16_disabled.png"});
    }
});