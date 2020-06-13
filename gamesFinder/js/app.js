// Create years
const years = document.createElement('option');
const max = new Date().getFullYear();
let min = max - 12;

for (let i = max; i > min; i--) {
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    document.querySelector('#release').appendChild(option);
}

// Function of obtaining video games
function getGames() {
    return [{
            name: 'Counter-Strike: GO',
            image: '../img/csgo.jpg',
            release: 2012,
            gender: 'Shooter',
            oldprice: 750,
            price: 550,
            platform: 'PC',
            language: 'Español'
        },
        {
            name: 'PUBG',
            image: '../img/pubg.jpg',
            release: 2017,
            gender: 'Battle Royale',
            oldprice: 1500,
            price: 1000,
            platform: 'PC',
            language: 'Inglés'
        },
        {
            name: 'Grand Theft Auto V',
            image: '../img/gtav.jpg',
            release: 2015,
            gender: 'Acción',
            oldprice: 1000,
            price: 700,
            platform: 'PC',
            language: 'Español'
        },
        {
            name: 'Rocket League',
            image: '../img/rleague.jpg',
            release: 2015,
            gender: 'Deportes',
            oldprice: 420,
            price: 225,
            platform: 'PC',
            language: 'Inglés'
        },
        {
            name: 'FIFA 20',
            image: '../img/fifa20.jpg',
            release: 2019,
            gender: 'Deportes',
            oldprice: 1800,
            price: 1200,
            platform: 'PC',
            language: 'Español'
        },
        {
            name: 'Call of Duty: Warzone',
            image: '../img/warzone.jpg',
            release: 2020,
            gender: 'Battle Royale',
            oldprice: 2000,
            price: 1300,
            platform: 'PC',
            language: 'Español'
        },
        {
            name: 'Minecraft',
            image: '../img/minecraft.jpg',
            release: 2009,
            gender: 'Sandbox',
            oldprice: 2500,
            price: 1800,
            platform: 'PC',
            language: 'Español'
        },
        {
            name: 'Pro Evolution Soccer 2020',
            image: '../img/pes2020.jpg',
            release: 2019,
            gender: 'Deportes',
            oldprice: 2300,
            price: 1800,
            platform: 'PC',
            language: 'Español'
        },
        {
            name: 'Overwatch',
            image: '../img/overwatch.jpg',
            release: 2016,
            gender: 'Shooter',
            oldprice: 2500,
            price: 2000,
            platform: 'PC',
            language: 'Español'
        },
        {
            name: 'Apex Legends',
            image: '../img/apex.jpg',
            release: 2019,
            gender: 'Battle Royale',
            oldprice: 1900,
            price: 1500,
            platform: 'PC',
            language: 'Español'
        },
        {
            name: 'NBA 2K20',
            image: '../img/nba.jpg',
            release: 2019,
            gender: 'Deportes',
            oldprice: 3500,
            price: 2700,
            platform: 'PC',
            language: 'Inglés'
        },
        {
            name: 'Street Fighter V',
            image: '../img/sf5.jpg',
            release: 2016,
            gender: 'Lucha',
            oldprice: 800,
            price: 600,
            platform: 'PC',
            language: 'Inglés'
        },
        {
            name: 'Red Dead Redemption 2',
            image: '../img/red.jpeg',
            release: 2019,
            gender: 'Aventura',
            oldprice: 3200,
            price: 2500,
            platform: 'PC',
            language: 'Español'
        },
        {
            name: 'DOOM Eternal',
            image: '../img/doom.jpg',
            release: 2020,
            gender: 'Acción',
            oldprice: 2750,
            price: 2150,
            platform: 'PC',
            language: 'Español'
        },
        {
            name: 'Killing Floor 2',
            image: '../img/kf.jpg',
            release: 2016,
            gender: 'Zombies',
            oldprice: 350,
            price: 110,
            platform: 'PC',
            language: 'Inglés'
        },
        {
            name: 'Battlefield V',
            image: '../img/b5.png',
            release: 2018,
            gender: 'Acción',
            oldprice: 2500,
            price: 1800,
            platform: 'PC',
            language: 'Español'
        },
        {
            name: 'Mortal Kombat 11',
            image: '../img/mk11.jpeg',
            release: 2019,
            gender: 'Lucha',
            oldprice: 1800,
            price: 1200,
            platform: 'PC',
            language: 'Español'
        },
        {
            name: 'ARK: Survival Evolved',
            image: '../img/ark.jpg',
            release: 2017,
            gender: 'Aventura',
            oldprice: 900,
            price: 540,
            platform: 'PC',
            language: 'Inglés'
        },
        {
            name: 'Far Cry 4',
            image: '../img/farcry4.jpg',
            release: 2014,
            gender: 'Acción',
            oldprice: 2500,
            price: 2000,
            platform: 'PS4',
            language: 'Español'
        },
        {
            name: 'Just Dance 2020',
            image: '../img/justdance.png',
            release: 2019,
            gender: 'Baile',
            oldprice: 5100,
            price: 4500,
            platform: 'PS4',
            language: 'Español'
        },
        {
            name: 'Crash Team Racing',
            image: '../img/ctr.jpg',
            release: 2019,
            gender: 'Carreras',
            oldprice: 4800,
            price: 4000,
            platform: 'PS4',
            language: 'Español'
        },
        {
            name: 'Minecraft Dungeons',
            image: '../img/minecraftdungeons.jpeg',
            release: 2020,
            gender: 'Acción',
            oldprice: 2900,
            price: 2000,
            platform: 'XBOX',
            language: 'Español'
        },
        {
            name: 'Tom Clancy´s The Division',
            image: '../img/tom-clancys.jpg',
            release: 2016,
            gender: 'Acción',
            oldprice: 2200,
            price: 1500,
            platform: 'XBOX',
            language: 'Español'
        },
        {
            name: 'Call of Duty: Black Ops',
            image: '../img/cod.jpg',
            release: 2010,
            gender: 'Shooter',
            oldprice: 2000,
            price: 900,
            platform: 'XBOX',
            language: 'Español'
        },

    ];
}

// Search data
let searchData = {
    name: '',
    release: '',
    gender: '',
    minimum: '',
    maximum: '',
    platform: '',
    language: ''
};

// Events DOM Loaded
const games = getGames();

document.addEventListener('DOMContentLoaded', () => {
    showGames(games);
});

// EventListeners for the form
const gender = document.querySelector('#gender');
gender.addEventListener('input', e => {
    searchData.gender = e.target.value;
    // Video game filtering function
    gameFilter();
});

const release = document.querySelector('#release');
release.addEventListener('input', e => {
    searchData.release = Number(e.target.value);
    // Video game filtering function
    gameFilter();
});

const platform = document.querySelector('#platform');
platform.addEventListener('input', e => {
    searchData.platform = e.target.value;
    // Video game filtering function
    gameFilter();
});

const minimum = document.querySelector('#minPrice');
minimum.addEventListener('input', e => {
    searchData.minimum = Number(e.target.value);
    // Video game filtering function
    gameFilter();
});

const maximum = document.querySelector('#maxPrice');
maximum.addEventListener('input', e => {
    searchData.maximum = Number(e.target.value);
    // Video game filtering function
    gameFilter();
});

const language = document.querySelector('#language');
language.addEventListener('input', e => {
    searchData.language = e.target.value;
    // Video game filtering function
    gameFilter();
});

function cleanHTML() {
    // Read the item "Result"
    const container = document.querySelector('#result');
    // Clear previous searches
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function showGames(games) {
    cleanHTML();
    // Read the item "Result"
    const container = document.querySelector('#result');
    // Build HTML structure of video games
    games.forEach(game => {
        const gameHTML = document.createElement('div');
        gameHTML.classList.add('col-md-3');
        gameHTML.innerHTML = `
        <div class="card text-center mb-4">
            <img class="card-img-top images" src="${game.image}" alt="">
                <div class="card-body cards">
                    <h5 class="card-title name">${game.name}</h5>
                    <p class="card-text release"><b>Fecha de lanzamiento</b>: ${game.release}</p>
                    <span class="badge badge-info mb-3">${game.gender}</span><span class="badge badge-dark platform">${game.platform}</span><span class="badge badge-primary language">${game.language}</span>
                    <p class="card-text price"><span class="oldprice">$${game.oldprice}</span> $<b>${game.price}</b></p>
                    <a href="#" class="btn btn-dark btn-block button-img"><img class="buy" src="../img/buy.png"> Comprar</a>
                </div>
        </div>
        `;
        container.appendChild(gameHTML);
    });
}

// Functions

// Function for when there is no search result available
function notResult() {
    cleanHTML();

    const notResult = document.createElement('div');
    notResult.classList.add('alert-message');
    notResult.appendChild(document.createTextNode('No hay resultados disponibles para esta búsqueda'));
    document.querySelector('#result').appendChild(notResult);
}

// Video game filtering function
function gameFilter() {
    const result = getGames().filter(filterGender).filter(filterYear).filter(filterPlatform)
        .filter(filterMin).filter(filterMax).filter(filterLanguage);

    if (result.length) {
        showGames(result);
    } else {
        notResult();
    }
}

// Gender filtering function
function filterGender(game) {
    if (searchData.gender) {
        return game.gender === searchData.gender;
    } else {
        return game;
    }
}

// Release year filtering function
function filterYear(game) {
    if (searchData.release) {
        return game.release === searchData.release;
    } else {
        return game;
    }
}

// Platform filtering function
function filterPlatform(game) {
    if (searchData.platform) {
        return game.platform === searchData.platform;
    } else {
        return game;
    }
}

// Minimum price filtering function
function filterMin(game) {
    if (searchData.minimum) {
        return game.price >= searchData.minimum;
    } else {
        return game;
    }
}

// Maximum price filtering function
function filterMax(game) {
    if (searchData.maximum) {
        return game.price <= searchData.maximum;
    } else {
        return game;
    }
}

// Language filtering function
function filterLanguage(game) {
    if (searchData.language) {
        return game.language === searchData.language;
    } else {
        return game;
    }
}