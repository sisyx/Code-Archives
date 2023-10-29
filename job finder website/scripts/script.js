const cardscotainer = document.querySelector('.cards-container');
const headerTagsBar = document.querySelector('.header--tag-bar');
const headerTagsContainer = document.querySelector('.header--tags-container');
const headerTagBarCloseBtn = document.querySelector('.header--tags-close-btn');
let tagsList = [];
let activeTagsList = [];
let tagsMatchingCardsList = [];
let isHeaderTagsBarCreatedAlready = false;


// start page
headerTagBarCloseBtn.addEventListener('click', headerTagBarCloseBtnClickHandler);



function createCard(card_data) {
    const cardTagsList = [...card_data.languages, ...card_data.tools, card_data.level];

    const isCardNew = card_data.new === true;
    const isCardFeatured =  card_data.featured === true;
    const isCardActive = (isCardNew && isCardFeatured);

    // create major elements
    const cardElm = document.createElement('div');
    cardElm.classList.add('card');
    if (isCardActive) { cardElm.classList.add('active'); }

    const cardMainInfoElm = document.createElement('div');
    cardMainInfoElm.classList.add('card--maininfo');

    const logoContainerElm = document.createElement('a');
    logoContainerElm.classList.add('job-logo');
    logoContainerElm.href = '#'

    const logoImgElm = document.createElement('img');
    logoImgElm.classList.add('job-owner-logo');
    logoImgElm.src = card_data.logo;
    
    const jobInfoContainerElm = document.createElement('div');
    jobInfoContainerElm.classList.add('job-info');

    const jobInfoHeaderElm = document.createElement('div');
    jobInfoHeaderElm.classList.add('job-info--header');

    const jobOwnerNameELm = document.createElement('p');
    jobOwnerNameELm.classList.add('job-owner-name');
    jobOwnerNameELm.innerHTML = card_data.company;
    
    const newTextElm = document.createElement('div');
    const featuredTextElm = document.createElement('div');
    if (isCardNew) {
        newTextElm.classList.add('header--new-mark');
        newTextElm.innerHTML = 'NEW';
    }
    if (isCardFeatured) {
        featuredTextElm.classList.add('header--featured-mark');
        featuredTextElm.innerHTML = 'FEATURED';
    }

    const jobTitleTextElm = document.createElement('a');
    jobTitleTextElm.classList.add('job-info--title');
    jobTitleTextElm.innerHTML = card_data.position;
    jobTitleTextElm.href = '#';

    const jobDetailElm = document.createElement('div');
    jobDetailElm.classList.add('job-info--detail');

    const jobPostDateElm = document.createElement('div');
    jobPostDateElm.classList.add('job-detail--date-realized');

    const jobPostDateTextElm = document.createElement('p');
    jobPostDateTextElm.classList.add('detail-text');
    jobPostDateTextElm.innerHTML = card_data.postedAt;

    const detailSep1 = document.createElement('p');
    detailSep1.classList.add('detail-sep');
    detailSep1.innerHTML = '.';

    const jobContractElm = document.createElement('div');
    jobContractElm.classList.add('job-timing');

    const jobContractTextElm = document.createElement('p');
    jobContractTextElm.classList.add('detail-text');
    jobContractTextElm.innerHTML = card_data.contract;
    const detailSep2 = document.createElement('p');
    detailSep2.classList.add('detail-sep');
    detailSep2.innerHTML = '.';

    const jobLocationElm = document.createElement('div');
    jobLocationElm.classList.add('job-apearance-type');

    const jobLocationTextElm = document.createElement('p');
    jobLocationTextElm.classList.add('detail-text');
    jobLocationTextElm.innerHTML = card_data.location;




    // create minor elements
    const cardTagsElm = document.createElement('div');
    cardTagsElm.classList.add('card--tags');

    for (tag of cardTagsList) {
        const thisCardTagElm = document.createElement('div');
        thisCardTagElm.classList.add('card--tag');
        thisCardTagElm.innerHTML = tag;
        cardTagsElm.append(thisCardTagElm);
        thisCardTagElm.addEventListener('click', event => {cardTagsClickHandler(event)})
    }


    // id:tags key.value pairs
    tagsList.push({
        'id': card_data.id,
        'tags': cardTagsList
    })
    cardElm.id = card_data.id;
    cardElm.tagsList = cardTagsList;
        


    // appending elements
    logoContainerElm.append(logoImgElm);
    
    jobInfoHeaderElm.append(jobOwnerNameELm);
    jobInfoHeaderElm.append(newTextElm);
    jobInfoHeaderElm.append(featuredTextElm);
    
    jobPostDateElm.append(jobPostDateTextElm);
    jobContractElm.append(jobContractTextElm);
    jobLocationElm.append(jobLocationTextElm);
    
    jobInfoContainerElm.append(jobInfoHeaderElm);
    jobInfoContainerElm.append(jobTitleTextElm);
    jobInfoContainerElm.append(jobDetailElm)

    jobDetailElm.append(jobPostDateElm);
    jobDetailElm.append(detailSep1);
    jobDetailElm.append(jobContractElm);
    jobDetailElm.append(detailSep2);
    jobDetailElm.append(jobLocationElm);


    cardMainInfoElm.append(logoContainerElm);
    cardMainInfoElm.append(jobInfoContainerElm);
    cardElm.append(cardMainInfoElm);
    cardElm.append(cardTagsElm);
    
    return cardElm;
}

async function createElements() {
    const dataUrl = './data/data.json';
    let response = await fetch(dataUrl);
    let jobs = await response.json();
    
    for (job of jobs) {
        cardscotainer.append(createCard(job));
    }
}

createElements();

function cardTagsClickHandler(event) {
    let isHeaderActive = (headerTagsBar.classList.contains('active'));
    if (!isHeaderActive) {headerTagsBar.classList.add('active')}
    
    const thisHeaderTag = createHeaderTag(event);
    
    headerTagsContainer.append(thisHeaderTag);
}

function createHeaderTag(event) {
    // constant variables
    const tagName = event.target.innerHTML;


    // remove the un-matched cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (!card.tagsList.includes(tagName)){
            card.classList.add('un-matched-card');
        }
    });

    // creat header tags
    if (!activeTagsList.includes(tagName)) {
        const headerTagElm = document.createElement('div');
        headerTagElm.classList.add('header--tag');

        const headerTagTextElm = document.createElement('p');
        headerTagTextElm.classList.add('header--tag-text');
        headerTagTextElm.innerHTML = event.target.innerHTML;
        
        const headerTagCloseBtn = document.createElement('img');
        headerTagCloseBtn.classList.add('header--tag-close-btn');
        headerTagCloseBtn.src = './images/icon-remove.svg';
        
        headerTagElm.append(headerTagTextElm);
        headerTagElm.append(headerTagCloseBtn);
        
        activeTagsList.push(tagName);

        headerTagCloseBtn.addEventListener('click', event => {deleteOneHeaderTag(event)})
        
        return headerTagElm;
    } else {
        return '';
    }
}

function deleteOneHeaderTag(event) {

    // append cards including header tag names
    const thisTagName = event.target.parentElement.children[0].innerHTML;
    const cards = document.querySelectorAll('.card');
        // 1: get header tags list
    activeTagsList.splice(activeTagsList.indexOf(thisTagName), 1);
    if (activeTagsList.length === 0) {
        headerTagsBar.classList.remove('active');
    }
        // 2: get cards that include all active tag names and remove 'un-matched-card' classname from it
    cards.forEach(card => {
        const thisCardMatchedTags = [];
        activeTagsList.forEach(tag => {
            if (card.tagsList.includes(tag)) {
                thisCardMatchedTags.push(tag);
            }
        })
        console.log({
            'card': card,
            'mathced tags': thisCardMatchedTags,
            'active tags list': activeTagsList
        });
        if (thisCardMatchedTags.length === activeTagsList.length)
            card.classList.remove('un-matched-card');
        else 
            card.classList.add('un-matched-card');
    })


    // remove tag from header
    event.target.parentElement.remove();
}

function deleteAllCards() {
    document.querySelectorAll('.card').forEach(card => {
        card.remove();
    })
}


function headerTagBarCloseBtnClickHandler(event) {
    headerTagsBar.classList.remove('active');
    removeAllFilters();
}

function removeAllFilters() {
    activeTagsList = [];
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('un-matched-card');
    })

    document.querySelectorAll('.header--tag').forEach(haederTag => haederTag.remove())
}