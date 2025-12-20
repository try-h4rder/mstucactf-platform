const firebaseConfig = {
  apiKey: "AIzaSyCdWEtyUqNiUmqJGsa6fx-PkLYr0zJW1gQ",
  authDomain: "mstuca-platform.firebaseapp.com",
  projectId: "mstuca-platform",
  storageBucket: "mstuca-platform.firebasestorage.app",
  messagingSenderId: "228858890662",
  appId: "1:228858890662:web:f984d1c6aa7a5816842767",
  measurementId: "G-FPJVEDMV02"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const ui = new firebaseui.auth.AuthUI(auth);

const uiConfig = {
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  signInSuccessUrl: "/mstucactf-platform/"
};

function renderUserHeader() {
  const title = document.getElementById("login-title");
  if (!title) return;

  auth.onAuthStateChanged(user => {
    if (user) {
      title.textContent = user.displayName || user.email;
    }
  });
}

function initFirebaseUI() {
  const container = document.getElementById("firebaseui-auth-container");
  if (!container) return;

  if (!container.hasAttribute("data-initialized")) {
    container.setAttribute("data-initialized", "true");
    ui.start("#firebaseui-auth-container", uiConfig);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderUserHeader();
  initFirebaseUI();
});

let lastUrl = location.href;
new MutationObserver(() => {
  const url = location.href;
  if (url !== lastUrl) {
    lastUrl = url;
    setTimeout(() => {
      renderUserHeader();
      initFirebaseUI();
    }, 100);
  }
}).observe(document, { subtree: true, childList: true });
