const artists = [
  {
    photo: "./assets/img/saweetie.jpg",
    artistName: "Saweetie",
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa",
  },

  {
    photo: "./assets/img/saweetie.jpg",
    artistName: "Burna Boy",
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa",
  },

  {
    photo: "./assets/img/ye.jpg",
    artistName: "Ye",
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa",
  },

  {
    photo: "./assets/img/drake.jpg",
    artistName: "Drake",
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa",
  },

  {
    photo: "./assets/img/nicki.jpg",
    artistName: "Nicki",
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa",
  },

  {
    photo: "./assets/img/rihanna.jpg",
    artistName: "Rihanna",
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa",
  },
];

const artistSection = document.getElementById("attendingArtists");

artists.forEach((artist) => {
  let artistCard = document.createElement("div");
  artistCard.classList.add("artists-class");
  artistCard.classList.add("margin-sect");
  artistCard.innerHTML = `
 
 <div class = "artistPhoto"> 
 <img class= "artist-image "src="${artist.photo}" alt = "An image of the artist" />
 </div>

 <div class="artistdetails">
 <p class="artistName">${artist.artistName}</p>
 <p class="artistHeadliner">${artist.headliner}</p>
 <p class="artistInfo">${artist.artistInfo}</p>
 </div>
 `;

  artistSection.appendChild(artistCard);
});
