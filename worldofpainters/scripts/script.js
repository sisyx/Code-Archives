mountWebsite();

const showSettings = {
    sortBy: 'id',
    sortType: 'acceding',
    filter: {
        size: {
            min: 0,
            max: Infinity
        },
        year: {
            min: 0,
            max: Infinity
        },
        genre: 'all',
    }
}

let data = {}

function Post(drawing) {
    const postElm = document.createElement('div');
    postElm.className = 'post';

    const postImg = document.createElement('img');
    postImg.className = 'post-image';
    postImg.setAttribute('src', drawing.src);
    postElm.onclick = handleDrawingClick(drawing);

    const postTitle = document.createElement('div');
    postTitle.className = 'post-title';
    postTitle.innerHTML = drawing.title;
    
    const postArtist = document.createElement('div');
    postArtist.className = 'post-artist';
    postArtist.innerHTML = drawing.artist;

    const postGenre = document.createElement('div');
    postGenre.className = 'post-genre';
    postGenre.innerHTML = `${drawing.genre} | ${drawing.year}`;

    const postSize = document.createElement('div');
    postSize.className = 'post-size';
    postSize.innerHTML = `${drawing.size} KB`

    postElm.append(postImg);
    postElm.append(postTitle);
    postElm.append(postArtist);
    postElm.append(postGenre);
    postElm.append(postSize);

    return postElm
}

function handleDrawingClick(drawing) {
    // console.log(drawing);
}
 
async function mountWebsite() {
    await getData();
    await showData();
    await console.log(data);
}

async function getData() {
    const res = await fetch('/data/data.json')
    data = await res.json();
    return data
}

async function showData() {
    // const data = await getData();
    document.querySelector('.posts-container').innerHTML = ''
    let sortedDrawings = []
    if (showSettings.sortBy === 'year')
        sortedDrawings = [...data.drawings].sort((a, b) => a.year - b.year);
    else if (showSettings.sortBy === 'alphabet') {
        sortedDrawings = [...data.drawings].sort((a, b) => a.title.localeCompare(b.title));
    }
    else if (showSettings.sortBy === 'artist')
        sortedDrawings = [...data.drawings].sort((a, b) => a.artist.localeCompare(b.artist));
    else if (showSettings.sortBy === 'genre')
        sortedDrawings = [...data.drawings].sort((a, b) => a.genre.localeCompare(b.genre));
    else if (showSettings.sortBy === 'size')
        sortedDrawings = [...data.drawings].sort((a, b) => a.size - b.size);
    else 
        sortedDrawings = [...data.drawings].sort((a, b) => a.id.localeCompare(b.id));

    sortedDrawings = sortedDrawings
    .filter(drawing => drawing.year >= showSettings.filter.year.min) // filter year step 1
    .filter(drawing => drawing.year < showSettings.filter.year.max) // filter year step 2
    .filter(drawing => drawing.size >= showSettings.filter.size.min) // filter size step 1
    .filter(drawing => drawing.size < showSettings.filter.size.max) // filter size step 2
    if (showSettings.filter.genre !== 'all') {
        sortedDrawings = sortedDrawings.filter(drawing => drawing.genre.toLowerCase() === showSettings.filter.genre.toLowerCase()) // filter genre
    }
    console.log(sortedDrawings);
    // sortedDrawings.filter(drawing => drawing.year >  )
    showSettings.sortType === 'acceding' ? null : sortedDrawings = sortedDrawings.reverse();

    for (let i = 0; i < sortedDrawings.length; i++) {
        document.querySelector('.posts-container').append(Post(sortedDrawings[i]))
    }
}


// event handlers

function handeSortsClick(event) {
    console.log(event.target.innerHTML);
    showSettings.sortBy = event.target.innerHTML.toLowerCase();
    showData()
}

function htncleSortTypeClick(event) {
    showSettings.sortType = event.target.checked ? 'acceding' : 'decseding';
    showData()
}

function handleFilterSize(event, size) {
    if (size === 500) {
        showSettings.filter.size.min = 0;
        showSettings.filter.size.max = 500;
    } else if (size === 5000) {
        showSettings.filter.size.min = 500;
        showSettings.filter.size.max = 5000;
    } else if (size === 10000){
        showSettings.filter.size.min = 5000;
        showSettings.filter.size.max = Infinity;
    } else {
        showSettings.filter.size.min = 0;
        showSettings.filter.size.max = Infinity;
    }
    showData();
}

function handleFilterYear(event, year) {
    if (year === 0) {
        showSettings.filter.year.min = -10000;
        showSettings.filter.year.max = 1500;
    } else if (year === 1500) {
        showSettings.filter.year.min = 1500;
        showSettings.filter.year.max = 1900;
    } else if (year === 1900) {
        showSettings.filter.year.min = 1900;
        showSettings.filter.year.max = Infinity;
    } else {
        showSettings.filter.year.min = -10000;
        showSettings.filter.year.max = Infinity;
    }
    showData();
}

function handleFilterGenre(event, genre) {
    showSettings.filter.genre = genre;
    showData()
}

// get data
// show data
// change show settings
// reshow data