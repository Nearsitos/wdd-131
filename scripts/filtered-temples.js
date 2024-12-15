const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah",
        dedicated: "1893-04-06",
        area: 102000,
        image: "https://www.churchofjesuschrist.org/imgs/4332317b0b20bb092f498e5b199ec6a8b7ffbf94/full/!800%2C530/0/default"
    },
    {
        name: "San Diego Temple",
        location: "San Diego, California",
        dedicated: "1993-01-01",
        area: 42000,
        image: "https://cloudfront-us-east-1.images.arcpublishing.com/deseretnews/3VKJHM6BSKUTACFDKIZY2OGNYY.jpg"
    },
    {
        name: "Rexburg Idaho Temple",
        location: "Rexburg, Idaho",
        dedicated: "2008-02-10",
        area: 41000,
        image: "https://www.churchofjesuschrist.org/imgs/af036291e98a7caa26e051bd65e2a37176cbbf89/full/800%2C/0/default"
    },
    {
        name: "Palmyra New York Temple",
        location: "Palmyra, New York",
        dedicated: "2000-04-06",
        area: 10800,
        image: "https://ensignpeakfoundation.org/wp-content/uploads/2021/03/Palmyra-Temple-Oct-2019-01.jpg"
    },
    {
        name: "Provo City Center Temple",
        location: "Provo, Utah",
        dedicated: "2016-03-20",
        area: 78400,
        image: "https://www.thechurchnews.com/resizer/v2/JTOTOUISK55MWACWFMAHZA7RXM.jpg?auth=c451467f453e3ba64dcb99903dc3ffc1dfb7d6ea1a7da60de28869f9598ed5bd&focal=404%2C240&width=800&height=475"
    },
    {
        name: "Washington D.C. Temple",
        location: "Kensington, Maryland",
        dedicated: "1975-11-19",
        area: 160000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmSdDYo5kzSsXAxTzFjKkLuYoHWz6lyquCSA&s"
    },
    {
        name: "Los Angeles California Temple",
        location: "Los Angeles, California",
        dedicated: "1955-04-11",
        area: 124000,
        image: "https://www.churchofjesuschrist.org/imgs/f776300d2f59a0d25045f45d961c326a7ae080d8/full/800%2C/0/default"
    },
];

const currentYearElement = document.getElementById('current-year');
currentYearElement.textContent = new Date().getFullYear();

const lastModifiedElement = document.getElementById('last-modified');
lastModifiedElement.textContent = document.lastModified;

const hamburgerButton = document.createElement('button');
hamburgerButton.classList.add('hamburger');
hamburgerButton.innerHTML = '&#9776;';

const navigationMenu = document.querySelector('nav ul');

function toggleMenu() {
    navigationMenu.classList.toggle('show');
    hamburgerButton.innerHTML = navigationMenu.classList.contains('show') ? '&#10006;' : '&#9776;';
}

hamburgerButton.addEventListener('click', toggleMenu);
document.querySelector('header').appendChild(hamburgerButton);

window.addEventListener('resize', function () {
    const isMobileView = window.innerWidth <= 768;
    hamburgerButton.style.display = isMobileView ? 'block' : 'none';
});

hamburgerButton.style.display = window.innerWidth <= 768 ? 'block' : 'none';

function generateTempleCards(filteredTemples) {
    const gallery = document.getElementById('temple-gallery');
    gallery.innerHTML = '';
    filteredTemples.forEach(temple => {
        const templeCard = document.createElement('div');
        templeCard.classList.add('temple');
        templeCard.innerHTML = `
            <h3>${temple.name}</h3>
            <img src="${temple.image}" alt="${temple.name}" loading="lazy">
            <p><span class="label">Location:</span> ${temple.location}</p>
            <p><span class="label">Dedicated:</span> ${temple.dedicated}</p>
            <p><span class="label">Size:</span> ${temple.area} sq ft</p>
        `;
        gallery.appendChild(templeCard);
    });
}

function filterOld() {
    const oldTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
    generateTempleCards(oldTemples);
}

function filterNew() {
    const newTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
    generateTempleCards(newTemples);
}

function filterLarge() {
    const largeTemples = temples.filter(temple => temple.area > 90000);
    generateTempleCards(largeTemples);
}

function filterSmall() {
    const smallTemples = temples.filter(temple => temple.area < 10000);
    generateTempleCards(smallTemples);
}

function filterHome() {
    generateTempleCards(temples);
}

document.getElementById('old').addEventListener('click', filterOld);
document.getElementById('new').addEventListener('click', filterNew);
document.getElementById('large').addEventListener('click', filterLarge);
document.getElementById('small').addEventListener('click', filterSmall);
document.getElementById('home').addEventListener('click', filterHome);

filterHome();
