const artists = [
  {
    photo: "burna-boy.webp",
    artistName: "Burna Boy",
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa",
  },

  {
    photo: "./assets/img/burna-boy.webp",
    artistName: "Burna Boy",
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa",
  },

  {
    photo: "./assets/img/burna-boy.webp",
    artistName: "Burna Boy",
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa",
  },

  {
    photo: "./assets/img/burna-boy.webp",
    artistName: "Burna Boy",
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa",
  },

  {
    photo: "./assets/img/burna-boy.webp",
    artistName: "Burna Boy",
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa",
  },

  {
    photo: "./assets/img/burna-boy.webp",
    artistName: "Burna Boy",
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa",
  },
];

const artistSection = document.getElementById("attendingArtists");

artists.forEach((artist) => {
  let artistCard = document.createElement("div");

  artistCard.innerHTML = `
 
 <div class = "artistPhoto"> 
 <img class= "artist-image "src="${artist.photo}" alt = "An image of the artist" />
 </div>

 <div class="artistdetails">
 <p>${artist.artistName}</p>
 <p>${artist.headliner}</p>
 <p>${artist.artistInfo}</p>
 </div>
 `;

  artistSection.appendChild(artistCard);
});
