var obs = new MutationObserver(function(mutations, observer){
    for (const mutation of mutations) {
        if (mutation.type === 'childList') {
            for(node of mutation.addedNodes){
                if(node.className == "fc-ab-root"){
                    node.remove();
                    obs.disconnect();
                }
            }
        }
    }
});

obs.observe(document.body, {childList: true, subtree: true, attributes: false, characterData: false});

