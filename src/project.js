const artists = [
  {
    photo: "./assets/img/greta.jpg",
    artistName: "Greta Thunberg",
    headliner: "Climate Activist & Nobel Peace Prize Winner",
    artistInfo:
      "Greta Thunberg is a Swedish climate activist who has been nominated for the Nobel Peace Prize. She is also the founder of Fridays for Future, a global climate strike movement",
  },

  {
    photo: "./assets/img/algore.jpg",
    artistName: "Al Gore",
    headliner:
      "Former Vice President of the United States and climate change advocate",
    artistInfo:
      "Al Gore is a former Vice President of the United States and a climate change advocate. He is also the founder of the Climate Reality Project",
  },

  {
    photo: "./assets/img/alexandria.jpg",
    artistName: "Alexandria Villaseñor",
    headliner: "Climate Activist & Youth Activist",
    artistInfo:
      "Alexandria Villaseñor is a climate activist and a youth activist. She is also the youngest person to ever speak at the United Nations",
  },

  {
    photo: "./assets/img/nakate.jpg",
    artistName: "Vanessa Nakate",
    headliner: "Climate Activist & Youth Activist",
    artistInfo:
      "Vanessa Nakate is a climate activist and a youth activist. She is also the founder of the Climate Justice Youth Movement",
  },

  {
    photo: "./assets/img/bastida.jpg",
    artistName: "Xiye Bastida",
    headliner: "Climate Activist & Youth Activist",
    artistInfo:
      "Xiye Bastida is a climate activist and a youth activist. She is also the founder of the Climate Justice Youth Movement",
  },

  {
    photo: "./assets/img/shiva.jpg",
    artistName: "Vandana Shiva",
    headliner: "Climate Activist & Environmental Activist",
    artistInfo:
      "Vandana Shiva is an environmental activist and a climate activist. She is also the founder of the Navdanya Movement",
  },
];

const loadMoreBtn = document.querySelector(".load-more");
const artistSection = document.getElementById("attendingArtists");
const showLessBtn = document.querySelector("#showLessBtn");
artists.forEach((artist) => {
  const artistCard = document.createElement("li");

  artistCard.classList.add("artist");
  artistCard.innerHTML = `
 
 <div class = "artistPhoto-container"> 
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
const buttonContainer = document.querySelectorAll(".artist");

loadMoreBtn.addEventListener("click", () => {
  buttonContainer.forEach((card) => {
    card.style.display = "flex";
  });
  showLessBtn.style.display = "inline-block";
  loadMoreBtn.style.display = "none";
});

showLessBtn.style.display = "none";
showLessBtn.addEventListener("click", () => {
  for (let i = 2; i < buttonContainer.length; i += 1) {
    buttonContainer[i].style.display = "none";
  }
  loadMoreBtn.style.display = "inline-block";
  showLessBtn.style.display = "none";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    buttonContainer.forEach((card) => {
      card.style.display = "flex";
    });
  } else {
    buttonContainer.forEach((card, index) => {
      if (index < 2) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }
});
