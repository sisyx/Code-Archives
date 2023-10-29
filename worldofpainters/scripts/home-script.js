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

function Post(artist) {
    const postElm = document.createElement('div');
    postElm.className = 'post';

    const postImg = document.createElement('img');
    postImg.className = 'post-image';
    postImg.setAttribute('src', artist.src);
    postElm.onclick = handleArtistClick(artist);

    const postArtist = document.createElement('div');
    postArtist.className = 'post-artist';
    postArtist.innerHTML = artist.name;

    const postYear = document.createElement('div');
    postYear.className = 'post-year'
    postYear.innerHTML = artist.bornAt + '-' + artist.deathAt

    postElm.append(postImg);
    postElm.append(postArtist);
    postElm.append(postYear)
    return postElm
}

function handleArtistClick(drawing) {
    // console.log(drawing);
}
 
async function mountWebsite() {
    await getData();
    await showData();
    await console.log(data);
}

async function getData() {
    const res = await fetch('/data/artists-data.json')
    data = await res.json();
    return data
}

async function showData() {
    document.querySelector('.posts-container').innerHTML = ''
    const thisData = data;
    for (let i = 0; i < thisData.length; i++) {
        document.querySelector('.posts-container').append(Post(thisData[i]))
    }
}

// get data
// show data
// change show settings
// reshow data