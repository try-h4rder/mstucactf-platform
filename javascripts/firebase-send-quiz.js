(function() {
  if (!firebase || !firebase.auth || !firebase.firestore) return;

  const originalSetItem = localStorage.setItem;

  localStorage.setItem = function(key, value) {
    originalSetItem.apply(this, arguments);

    if (!key.startsWith("quiz_progress_")) return;

    const user = firebase.auth().currentUser;
    if (!user) return;

    const blockId = key.replace("quiz_progress_", "");

    let quizState;
    try { quizState = JSON.parse(value); } catch(e) { quizState = {}; }

    let totalScore = 0;
    for (const k in localStorage) {
      if (!k.startsWith("quiz_progress_")) continue;
      try {
        const qs = JSON.parse(localStorage.getItem(k));
        for (const qid in qs) {
          if (qs[qid].correct) totalScore += 100;
        }
      } catch(e) {}
    }

    const payload = {
      displayName: user.displayName || user.email,
      totalScore,
      quizzes: {
        [blockId]: quizState
      }
    };

    firebase.firestore()
      .collection("quizResults")
      .doc(user.uid)
      .set(payload, { merge: true });
  };
})();
