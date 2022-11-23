const artists = [
  {
    photo: "./assets/img/thestallion.webp",
    artistName: "Meghan",
    headliner: "Best Female Rapper of the Year",
    artistInfo:
      "Meghan broke to the scene a year ago with the song Beautiful Mistakes and has never looked back again. Also known for her electritifying perfomances Meghan is a gem in the industry",
  },

  {
    photo: "./assets/img/beyonce.jpg",
    artistName: "Beyonce",
    headliner: " Musician & Multiple Grammy Winner",
    artistInfo:
      "Ever heard of Beyonce, me too. Beyonce is ranked among best musicians of all time and most influential people on Planet Earth",
  },

  {
    photo: "./assets/img/ye.jpg",
    artistName: "Ye",
    headliner: "Musician & Multiple Emmy Winner",
    artistInfo:
      " The founder of Yeezys, the Billionaire has dominated the music scene with his albums. Also known for his controversial antics, Ye is never afraid to share his opinion ",
  },

  {
    photo: "./assets/img/drake.jpg",
    artistName: "Drake",
    headliner: "Musician & Multiple Grammy Winner",
    artistInfo:
      "The God's Plan hitmaker doesn't need much introduction. Drake is among the best musicians of all time and his awards and best selling albums don't lie either",
  },

  {
    photo: "./assets/img/nicki.jpg",
    artistName: "Nicki",
    headliner: "Musician & Best Female Rapper of the Decade",
    artistInfo:
      " <em>Starships were meant to fly....</em> What is there more to say about the Queen of Pop. She is here and she is perfect, enjoy her while you still can.",
  },

  {
    photo: "./assets/img/rihanna.jpg",
    artistName: "Rihanna",
    headliner: "Musician, Billionaire & Best Female Artist of the Decade",
    artistInfo:
      "Born in the beautiful country of Barbados, Rihanna has went on to dominate the music scene for decades with hit after hit. She is also the founder of Fenty, a company that focuses of women cosmetics",
  },
];

const loadMoreBtn = document.querySelector(".load-more");
const artistSection = document.getElementById("attendingArtists");

artists.forEach((artist) => {
  const artistCard = document.createElement("div");
  artistCard.classList.add("artists-class");
  artistCard.classList.add("flex");
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
const buttonContainer = document.querySelectorAll(".artists-class");
loadMoreBtn.addEventListener("click", () => {
  buttonContainer.forEach((card) => {
    card.style.display = "flex";
  });
});
