document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".song-collections-tab");
  const songList = document.getElementById("songCollectionList");

  function renderSongs(genre) {
    songList.innerHTML = "";
    const filtered = songData
      .map((song, idx) => ({ ...song, idx }))
      .filter((song) => song.genre === genre);
    filtered.forEach((song) => {
      const card = document.createElement("div");
      card.className = "song-collection-card";
      card.style.cursor = "pointer";
      card.innerHTML = `
        <img class="song-collection-img" src="${song.photo}" alt="${song.artist} - ${song.name} album cover" />
        <div class="song-collection-info">
          <div class="song-collection-title">${song.name}</div>
          <div class="song-collection-artist">${song.artist}</div>
          <div class="song-collection-desc">${song.description}</div>
        </div>
      `;
      card.addEventListener("click", function () {
        window.location.href = `song-details.html?id=${song.idx}`;
      });
      songList.appendChild(card);
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("tab-active"));
      this.classList.add("tab-active");
      renderSongs(this.dataset.genre);
    });
  });

  function getGenreFromURL() {
    const params = new URLSearchParams(window.location.search);
    let genre = params.get("genre");
    if (genre) {
      genre = decodeURIComponent(genre);
      if (genre === "R%26B") genre = "R&B";
    }
    return genre;
  }

  const validGenres = ["Pop", "R&B", "K-Pop"];
  let initialGenre = getGenreFromURL();
  if (!validGenres.includes(initialGenre)) initialGenre = "Pop";

  tabs.forEach((tab) => {
    if (tab.dataset.genre === initialGenre) {
      tab.classList.add("tab-active");
    } else {
      tab.classList.remove("tab-active");
    }
  });
  renderSongs(initialGenre);
});
