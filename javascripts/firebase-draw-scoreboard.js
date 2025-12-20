function loadscoreboard() {
  const scoreboardTable = document.querySelector("#scoreboard-table tbody");
  if (!scoreboardTable) return;

  const db = firebase.firestore();
  const TOP_N = 100;

  db.collection("quizResults")
    .orderBy("totalScore", "desc")
    .limit(TOP_N)
    .get()
    .then(snapshot => {
      scoreboardTable.innerHTML = "";
      let rank = 1;

      snapshot.forEach(doc => {
        const data = doc.data();
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${rank}</td>
          <td>${data.displayName || "Unknown"}</td>
          <td>${data.totalScore || 0}</td>
        `;
        scoreboardTable.appendChild(tr);
        rank++;
      });

      if (rank === 1) {
        scoreboardTable.innerHTML = "<tr><td colspan='3'>Нет данных</td></tr>";
      }
    })
    .catch(err => {
      scoreboardTable.innerHTML = `<tr><td colspan="3">Ошибка загрузки: ${err}</td></tr>`;
    });
};

document.addEventListener("DOMContentLoaded", () => {
  loadscoreboard();
});
