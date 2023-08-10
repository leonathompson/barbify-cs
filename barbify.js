// update logo to Barbified CS logo

const logo = document.querySelector('#hs-link-site_logo_hs_logo_widget > img');
logo.src =
  'https://res.cloudinary.com/mfrazb/image/upload/v1691637700/codesmith-logoArtboard_1_yby0ja.png';

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
const numberPoints = document.querySelectorAll('.item-no');
numberPoints.forEach(el => el.style.background = '#FCBCDB');
const testimonials = document.querySelectorAll('.testimonial-outer');
testimonials.forEach(el => el.style.background = '#FCBCDB');
const workshops = document.querySelectorAll('.events-section');
workshops.forEach(el => el.style.background = '#FCBCDB');


// BUTTONS //
const apply = document.querySelectorAll('.cta_button.apply-cta');
apply[0].style.background = '#FD0086';
const submit = document.querySelectorAll('.hs-button');
submit[0].style.background = '#FD0086';
submit[0].style.border = '#FD0086';
const learnMore = document.querySelectorAll('.primary-button');
learnMore.forEach(el => el.style.background = '#FD0086')



// IMAGES // 

// update image one 
const imgOne = document.querySelector("#hs_cos_wrapper_widget_1657116293820 > section > div.content-wrapper > div > div.img-block > div.img-one > img");

imgOne.src = "https://ae01.alicdn.com/kf/H96b5b6e694e844aea4f0aadfd2bb6faa6.jpg_640x640q90.jpg";

imgOne.srcset="https://ae01.alicdn.com/kf/H96b5b6e694e844aea4f0aadfd2bb6faa6.jpg_640x640q90.jpg 138w, https://ae01.alicdn.com/kf/H96b5b6e694e844aea4f0aadfd2bb6faa6.jpg_640x640q90.jpg 276w, https://ae01.alicdn.com/kf/H96b5b6e694e844aea4f0aadfd2bb6faa6.jpg_640x640q90.jpg 414w, https://ae01.alicdn.com/kf/H96b5b6e694e844aea4f0aadfd2bb6faa6.jpg_640x640q90.jpg 552w, https://ae01.alicdn.com/kf/H96b5b6e694e844aea4f0aadfd2bb6faa6.jpg_640x640q90.jpg 690w, https://ae01.alicdn.com/kf/H96b5b6e694e844aea4f0aadfd2bb6faa6.jpg_640x640q90.jpg 828w" 

// update image two 
const imgTwo = document.querySelector("#hs_cos_wrapper_widget_1657116293820 > section > div.content-wrapper > div > div.img-block > div.img-two > img");

imgTwo.src = "https://media.npr.org/assets/img/2014/11/22/computer_barbie_custom-79ea4462d4db58625c1ef0dc8d28004360f9b749.jpg"

imgTwo.srcset = "https://media.npr.org/assets/img/2014/11/22/computer_barbie_custom-79ea4462d4db58625c1ef0dc8d28004360f9b749.jpg 101w, https://media.npr.org/assets/img/2014/11/22/computer_barbie_custom-79ea4462d4db58625c1ef0dc8d28004360f9b749.jpg 202w, https://media.npr.org/assets/img/2014/11/22/computer_barbie_custom-79ea4462d4db58625c1ef0dc8d28004360f9b749.jpg 303w, https://media.npr.org/assets/img/2014/11/22/computer_barbie_custom-79ea4462d4db58625c1ef0dc8d28004360f9b749.jpg 404w, https://media.npr.org/assets/img/2014/11/22/computer_barbie_custom-79ea4462d4db58625c1ef0dc8d28004360f9b749.jpg 505w, https://media.npr.org/assets/img/2014/11/22/computer_barbie_custom-79ea4462d4db58625c1ef0dc8d28004360f9b749.jpg 606w"

// update image last 
const imgLast = document.querySelector("#hs_cos_wrapper_widget_1657116293820 > section > div.content-wrapper > div > div.img-block > div.img-last > img");

imgLast.src = "https://i.ytimg.com/vi/WsvpJNHtJcc/maxresdefault.jpg"



// update software engineering immersive image 
const willSentanceImg = document.querySelector("#hs_cos_wrapper_widget_1657109223471 > section > div > ul > li.full-block > div > div.image-outer > div");
willSentanceImg.style.backgroundImage = "url(https://i.ytimg.com/vi/LIu-3j34fe8/mqdefault.jpg)";


// update JS for beginners image
const studentTableImg = document.querySelector("#hs_cos_wrapper_widget_1657109223471 > section > div > ul > li:nth-child(2) > div > div.image-outer > div");
studentTableImg.style.backgroundImage = "url(https://i.ytimg.com/vi/y3B4Gv2EqZk/maxresdefault.jpg)";

// update CS Prep image 
const csPrepImg = document.querySelector("#hs_cos_wrapper_widget_1657109223471 > section > div > ul > li:nth-child(3) > div > div.image-outer > div");
csPrepImg.style.backgroundImage = "url(https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/21/1416571342119/Barbie-at-a-computer-012.jpg?width=620&quality=85&auto=format&fit=max&s=55aed1cbce8b5ff7f8a3335e0e9b62a6)";

// update bg-image
const libraryStudents = document.querySelector("#admissions > div > div > div.img-block-out > div.bg-img-out > div");
libraryStudents.style.backgroundImage = "url(https://miro.medium.com/v2/resize:fit:640/1*yAwKRJMTECrXJPvUDd2fxg.jpeg)";

