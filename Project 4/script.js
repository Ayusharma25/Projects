// Theme Toggle
const toggleSwitch = document.getElementById('themeSwitch');
const body = document.body;

toggleSwitch.addEventListener('change', function() {
  if (this.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
});

// Playlist functionality
const playlistBtn = document.getElementById('playlistBtn');
const playlistInput = document.getElementById('playlistInput');
const allPlaylists = document.getElementById('allPlaylists');

playlistBtn.addEventListener('click', function() {
  const playlistName = playlistInput.value.trim();
  if (playlistName !== '') {
    const newPlaylist = document.createElement('div');
    newPlaylist.classList.add('playlist-item');
    newPlaylist.innerHTML = `<button onclick="selectPlaylist('${playlistName}')">${playlistName}</button>
                             <span class="delete-icon" onclick="removePlaylist('${playlistName}')">&#10006;</span>`;
    allPlaylists.appendChild(newPlaylist);
    playlistInput.value = ''; // Clear input field
  }
});

// Store selected playlist and songs
let selectedPlaylist = null;
let currentPlaylistSongs = [];

function selectPlaylist(playlistName) {
  selectedPlaylist = playlistName;
  const playlistSongs = currentPlaylistSongs.filter(song => song.playlist === playlistName);
  updateCurrentPlaylist(playlistSongs);
}

// Function to remove a playlist
function removePlaylist(playlistName) {
  const playlists = document.querySelectorAll('.playlist-item');
  playlists.forEach(playlist => {
    if (playlist.innerText.includes(playlistName)) {
      playlist.remove();
    }
  });
}

// Song Play functionality
function playSong(title, artist, imageSrc, audioSrc) {
  document.getElementById('songTitle').textContent = title;
  document.getElementById('songArtist').textContent = artist;
  document.getElementById('songImage').src = imageSrc;
  document.getElementById('songImage').style.display = 'block'; // Show image
  document.getElementById('audioPlayer').src = audioSrc;
  document.getElementById('audioPlayer').play();
  updateCurrentPlaylistSongs();
}

// Store songs in current playlist
function updateCurrentPlaylist(playlistSongs) {
  const playlist = document.getElementById('currentPlaylist');
  playlist.innerHTML = ''; // Clear previous songs
  playlistSongs.forEach(song => {
    const newSongItem = document.createElement('li');
    newSongItem.innerHTML = `${song.title} <span class="delete-icon" onclick="removeSongFromPlaylist('${song.title}')">&#10006;</span>`;
    playlist.appendChild(newSongItem);
  });
}

// Remove song from the current playlist
function removeSongFromPlaylist(title) {
  const playlist = document.getElementById('currentPlaylist');
  const songs = Array.from(playlist.children);
  songs.forEach(song => {
    if (song.innerText.includes(title)) {
      song.remove();
    }
  });
}

// Placeholder functions for next and previous song functionality
let currentSongIndex = -1;

function nextSong() {
  if (selectedPlaylist) {
    currentSongIndex++;
    if (currentSongIndex < currentPlaylistSongs.length) {
      const song = currentPlaylistSongs[currentSongIndex];
      playSong(song.title, song.artist, song.imageSrc, song.audioSrc);
    } else {
      alert('End of playlist.');
      currentSongIndex = currentPlaylistSongs.length - 1; // Stay on the last song
    }
  } else {
    const allSongs = document.querySelectorAll('.song-item');
    currentSongIndex++;
    if (currentSongIndex < allSongs.length) {
      const song = allSongs[currentSongIndex];
      const title = song.getAttribute('data-title');
      const artist = song.getAttribute('data-artist');
      const imageSrc = song.getAttribute('data-image');
      const audioSrc = song.getAttribute('data-audio');
      playSong(title, artist, imageSrc, audioSrc);
    } else {
      alert('End of all songs.');
      currentSongIndex = allSongs.length - 1; // Stay on the last song
    }
  }
}

function previousSong() {
  if (selectedPlaylist) {
    currentSongIndex--;
    if (currentSongIndex >= 0) {
      const song = currentPlaylistSongs[currentSongIndex];
      playSong(song.title, song.artist, song.imageSrc, song.audioSrc);
    } else {
      alert('Already at the first song in the playlist.');
      currentSongIndex = 0; // Stay on the first song
    }
  } else {
    const allSongs = document.querySelectorAll('.song-item');
    currentSongIndex--;
    if (currentSongIndex >= 0) {
      const song = allSongs[currentSongIndex];
      const title = song.getAttribute('data-title');
      const artist = song.getAttribute('data-artist');
      const imageSrc = song.getAttribute('data-image');
      const audioSrc = song.getAttribute('data-audio');
      playSong(title, artist, imageSrc, audioSrc);
    } else {
      alert('Already at the first song in all songs.');
      currentSongIndex = 0; // Stay on the first song
    }
  }
}

// Filter songs by genre
document.getElementById('genreFilter').addEventListener('change', function() {
  const selectedGenre = this.value;
  const songs = document.querySelectorAll('.song-item');
  
  songs.forEach(song => {
    if (selectedGenre === 'All' || song.getAttribute('data-genre') === selectedGenre) {
      song.style.display = 'flex';
    } else {
      song.style.display = 'none';
    }
  });
});

// Add songs to currentPlaylistSongs for demonstration
currentPlaylistSongs = [
  { title: 'Shape Of You', artist: 'Ed Sheeran', imageSrc: 'https://upload.wikimedia.org/wikipedia/en/4/4c/Ed_Sheeran_-_Shape_of_You.png', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', playlist: 'My Playlist' },
  { title: 'All Of Me', artist: 'John Legend', imageSrc: 'https://upload.wikimedia.org/wikipedia/en/0/0c/John_Legend_All_of_Me.png', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', playlist: 'My Playlist' },
  { title: 'Blinding Lights', artist: 'The Weeknd', imageSrc: 'https://upload.wikimedia.org/wikipedia/en/9/95/The_Weeknd_-_Blinding_Lights.png', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', playlist: 'My Playlist' },
  { title: 'Levitating', artist: 'Dua Lipa', imageSrc: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Dua_Lipa_-_Levitating.png', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', playlist: 'My Playlist' },
  { title: 'Stay', artist: 'The Kid LAROI & Justin Bieber', imageSrc: 'https://upload.wikimedia.org/wikipedia/en/3/35/The_Kid_LAROI_Stay.png', audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3', playlist: 'My Playlist' },
  // Add more songs as needed
];