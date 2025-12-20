(function() {
  if (!firebase || !firebase.auth || !firebase.firestore) return;

  firebase.auth().onAuthStateChanged(user => {
    Object.keys(localStorage).forEach(k => {
      if (k.startsWith("quiz_progress_")) localStorage.removeItem(k);
    });

    if (!user) return;

    const db = firebase.firestore();
    const docRef = db.collection("quizResults").doc(user.uid);

    docRef.get().then(doc => {
      if (!doc.exists) return;

      const data = doc.data();
      if (!data.quizzes) return;

      Object.keys(data.quizzes).forEach(blockId => {
        const key = "quiz_progress_" + blockId;
        const value = JSON.stringify(data.quizzes[blockId]);
        localStorage.setItem(key, value);
      });
    });
  });
})();
