const artists = [
  {
    photo: './assets/img/thestallion.webp',
    artistName: 'Meghan',
    headliner: 'See you there',
    artistInfo:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa',
  },

  {
    photo: './assets/img/beyonce.jpg',
    artistName: 'Beyonce',
    headliner: " Don't miss out",
    artistInfo:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa',
  },

  {
    photo: './assets/img/ye.jpg',
    artistName: 'Ye',
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa',
  },

  {
    photo: './assets/img/drake.jpg',
    artistName: 'Drake',
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa',
  },

  {
    photo: './assets/img/nicki.jpg',
    artistName: 'Nicki',
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa',
  },

  {
    photo: './assets/img/rihanna.jpg',
    artistName: 'Rihanna',
    headliner: "I can't wait to meet my lovely fans",
    artistInfo:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit.Molesti cupiditate voluptatibus ipsa',
  },
];

const loadMoreBtn = document.querySelector('.load-more');
const artistSection = document.getElementById('attendingArtists');

artists.forEach((artist) => {
  const artistCard = document.createElement('div');
  artistCard.classList.add('artists-class');
  // artistCard.classList.add("margin-sect");
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
const buttonContainer = document.querySelectorAll('.artists-class');
loadMoreBtn.addEventListener('click', () => {
  buttonContainer.forEach((card) => {
    card.style.display = 'grid';
  });
});
