const resultsBox = document.getElementById("resultsBox");
const chooseButton = document.getElementById("chooseButton");
const albumInfo = document.getElementById("albumInfo");
const albumTitle = document.getElementById("albumTitle");
const albumCover = document.getElementById("albumCover");

const albumsList = [
    {
        "artist": "Prince",
        "title": "Under the Cherry Moon",
        "releaseDate": 1986,
        "cover": "https://images-na.ssl-images-amazon.com/images/I/81BW-AbIfSL._SL1500_.jpg"
    },
    {
        "artist": "Lauryn Hill",
        "title": "The Miseducation of Lauryn Hill",
        "releaseDate": 1998,
        "cover": "https://images-na.ssl-images-amazon.com/images/I/81CqPy68mWL._SL1500_.jpg"
    },
    {
        "artist": "Donna Summer",
        "title": "Bad Girls",
        "releaseDate": 1979,
        "cover": "https://images-na.ssl-images-amazon.com/images/I/71EWJmd0VLL._SL1200_.jpg"
    },
    {
        "artist": "Queen",
        "title": "Sheer Heart Attack",
        "releaseDate": 1973,
        "cover": "https://images-na.ssl-images-amazon.com/images/I/91k9o225K6L._SL1500_.jpg"
    },
    {
        "artist": "Fleetwood Mac",
        "title": "Rumours",
        "releaseDate": 1977,
        "cover": "https://images-na.ssl-images-amazon.com/images/I/71HWqbh0BLL._SL1425_.jpg"
    },
    {
        "artist": "Stevie Wonder",
        "title": "Innervisions",
        "releaseDate": 1973,
        "cover": "https://images-na.ssl-images-amazon.com/images/I/51tsY%2B2a7fL.jpg"
    }
];

const chooseAlbum = () => {
    const albumNum = Math.floor(Math.random() * albumsList.length);

    albumCover.innerHTML = `<img src='${albumsList[albumNum].cover}'>`;
    albumTitle.innerText = albumsList[albumNum].title;
    artist.innerText = albumsList[albumNum].artist;
    releaseDate.innerText = albumsList[albumNum].releaseDate;

};

chooseButton.addEventListener("click", chooseAlbum);