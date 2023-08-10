// update logo to Barbified CS logo

const logo = document.querySelector('#hs-link-site_logo_hs_logo_widget > img');
logo.src =
  'https://logo.com/image-cdn/images/kts928pd/production/4eb435769b8d8d259cd5d6cd59ffb38652907841-700x394.png?w=1080&q=72';

// update hero background

const background = document.querySelector(
  '#hs_cos_wrapper_widget_1657116293820 > section > div.section-background-color',
);
background.style.background =
  'linear-gradient(179.78deg, #FFFFFF 33.41%, #FD0086 84.81%';

// update box in background
const boxBackground = document.querySelectorAll('.box-background-color')
boxBackground.forEach(el => el.style.background = 'linear-gradient(#FD0086, #FCBCDB)');

// update h2s color

const h2s = document.querySelectorAll('h2');
h2s.forEach(h2 => (h2.style.color = '#FD0086'));

// update h4s color
const h4s = document.querySelectorAll('h4');
h4s.forEach(el => el.style.color = '#FD0086');



// change the dots to pink
const svg1 = document.querySelector(
  '#hs_cos_wrapper_widget_1657116293820 > section > div.content-wrapper > div > div.img-block > div.top-shape > svg',
);


// update bullet points 
const bulletPoints = document.querySelectorAll('.item-no')
bulletPoints.forEach(el => el.style.background = '#FCBCDB')


// update students at table image 
const studentTableImg = document.querySelector("#hs_cos_wrapper_widget_1657109223471 > section > div > ul > li:nth-child(2) > div > div.image-outer > div");
studentTableImg.style.backgroundImage = "url(https://i.ytimg.com/vi/y3B4Gv2EqZk/maxresdefault.jpg)";

// update bg-image

const libraryStudents = document.querySelector("#admissions > div > div > div.img-block-out > div.bg-img-out > div");
libraryStudents.style.backgroundImage = "url(https://miro.medium.com/v2/resize:fit:640/1*yAwKRJMTECrXJPvUDd2fxg.jpeg)";