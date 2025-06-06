// scripts/song-details.js

// Helper: get query param
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Find song by id (index in songData)
function getSongById(id) {
  if (!window.songData) return null;
  const idx = parseInt(id, 10);
  if (isNaN(idx) || idx < 0 || idx >= window.songData.length) return null;
  return window.songData[idx];
}

// Load lyrics from file
async function loadLyrics(lyricsPath) {
  try {
    const res = await fetch(lyricsPath);
    if (!res.ok) throw new Error("Lyrics not found");
    return await res.text();
  } catch (e) {
    return "[Lyrics not available]";
  }
}

async function renderSongDetails() {
  const id = getQueryParam("id");
  const song = getSongById(id);
  if (!song) {
    document.getElementById("songName").textContent = "Song Not Found";
    document.getElementById("songArtist").textContent = "";
    document.getElementById("songDesc").textContent = "";
    document.getElementById("lyricsContainer").innerHTML = "<p>[No lyrics]</p>";
    document.getElementById("songCover").src = "";
    document.getElementById("audioSource").src = "";
    document.getElementById("audioPlayer").load();
    return;
  }
  document.getElementById("songName").textContent = song.name;
  document.getElementById("songArtist").textContent = song.artist;
  document.getElementById("songDesc").textContent = song.description;
  document.getElementById("songCover").src = song.photo;
  document.getElementById("audioSource").src = song.audio;
  document.getElementById("audioPlayer").load();

  // Load lyrics
  const lyricsText = await loadLyrics(song.lyrics);
  // Simple formatting: split by line, wrap in <p>
  const lines = lyricsText
    .split("\n")
    .map((line) =>
      line.trim() === ""
        ? "<br>"
        : `<p class="touch-my-body-tender-cause-th">${line}</p>`
    );
  document.getElementById("lyricsContainer").innerHTML = lines.join("");
}

// Wait for songData to be loaded (since it's a <script> before this one)
window.addEventListener("DOMContentLoaded", renderSongDetails);
