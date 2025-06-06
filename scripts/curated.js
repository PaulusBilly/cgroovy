function getRandomUniqueSongs(arr, n) {
  const result = [];
  const taken = new Set();
  while (result.length < n && taken.size < arr.length) {
    const idx = Math.floor(Math.random() * arr.length);
    if (!taken.has(idx)) {
      result.push(arr[idx]);
      taken.add(idx);
    }
  }
  return result;
}
function renderCuratedPicks() {
  const curated = getRandomUniqueSongs(window.songData, 6);
  const container = document.getElementById("curatedPicksInner");
  if (!container) return;
  container.innerHTML = "";
  curated.forEach((song) => {
    const pick = document.createElement("div");
    pick.className = "curated-pick";
    pick.innerHTML = `
      <div class="curated-pick-img-wrap">
        <img src="${song.photo}" alt="${song.artist} - ${song.name} album cover" />
      </div>
      <div class="curated-pick-info-wrap">
        <span class="track-title">${song.name}</span><br />
        <span class="track-artist">${song.artist}</span>
      </div>
    `;
    pick.addEventListener("click", function () {
      window.location.href = `song-details.html?id=${song.id}`;
    });
    container.appendChild(pick);
  });
}
document.addEventListener("DOMContentLoaded", renderCuratedPicks);
