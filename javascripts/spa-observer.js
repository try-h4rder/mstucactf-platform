let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;

        if (document.querySelector("#quiz-scoreboard")) {
            loadscoreboard();
        }

        if (document.querySelector("#firebaseui-auth-container")) {
            setTimeout(() => {
                renderUserHeader();
                initFirebaseUI();
                loadscoreboard();
            }, 100);
        }
    }
}).observe(document, { subtree: true, childList: true });