// // add Barbify button with event listener that executes all changes when button is pressed

const headerRight = document.querySelector(
  'body > div.body-wrapper.hs-content-id-48622873413.hs-site-page.page > div:nth-child(1) > header > div.header__container.content-wrapper > div.header__column.header-right',
);

const barbifyButton = document.createElement('button');

// // add Barbify logo as button
// // const barbifyImg = document.createElement('img');
// // barbifyImg.src =
// //   'https://res.cloudinary.com/mfrazb/image/upload/v1691691708/barbify-button-sm_dixhlz.png';

// // barbifyImg.height = '1rem';
// // barbifyButton.appendChild(barbifyImg);

barbifyButton.textContent = 'Barbify';
barbifyButton.style.color = '#e374a5';

headerRight.appendChild(barbifyButton);

barbifyButton.addEventListener('click', barbify);

function barbify(event) {
  // show sparkle animation
  // update logo to Barbified CS logo
  const logo = document.querySelector(
    '#hs-link-site_logo_hs_logo_widget > img',
  );
  logo.src =
    'https://res.cloudinary.com/mfrazb/image/upload/v1691690208/codesmith-logo-withCS-750_kh7uvq.png';

  // update hero background

  const background = document.querySelector(
    '#hs_cos_wrapper_widget_1657116293820 > section > div.section-background-color',
  );
  background.style.background =
    'linear-gradient(179.78deg, #FFFFFF 33.41%, #FD0086 84.81%';

  // update box in background
  const boxBackground = document.querySelectorAll('.box-background-color');
  boxBackground.forEach(
    el => (el.style.background = 'linear-gradient(#FD0086, #FCBCDB)'),
  );

  // update upper bottom background
  const bottomBackground = document.querySelectorAll(
    '.cta-section .background-image',
  );
  bottomBackground.forEach(el => (el.style.background = '#FCBCDB'));

  // update lower bottom background
  const footer = document.querySelectorAll('.footer');
  footer[0].style.background = '#FD0086';

  const bottomMid = document.querySelectorAll('.vvss22');
  bottomMid[0].style.fill = '#FD0086';
  const fade = document.querySelectorAll('.vvss33');
  fade[0].style.fill = '#FCBCDB';
  const faqs = document.querySelectorAll('.flex-row .link-outer a');
  faqs[0].style.color = '#FCBCDB';
  const plus1 = document.querySelectorAll(
    '.accordion-block .faq-list .tab-icon span.line-one',
  );
  plus1.forEach(el => (el.style.background = '#FD0086'));
  const plus2 = document.querySelectorAll(
    '.accordion-block .faq-list .tab-icon span.line-two',
  );
  plus2.forEach(el => (el.style.background = '#FD0086'));

  // update h1
  const h1 = document.querySelectorAll('#hs_cos_wrapper_widget_1657116293820 > section > div.content-wrapper > div > div.cnt-block > div > h1');
  h1[0].style.color = '#FD0086';


  
  // update h2s color
  const h2s = document.querySelectorAll('h2');
  h2s.forEach(h2 => (h2.style.color = '#FD0086'));

  // update h4s color
  const h4s = document.querySelectorAll('h4');
  h4s.forEach(el => (el.style.color = '#FD0086'));

  // update bullet points
  const numberPoints = document.querySelectorAll('.item-no');
  numberPoints.forEach(el => (el.style.background = '#FCBCDB'));
  const testimonials = document.querySelectorAll('.testimonial-outer');
  testimonials.forEach(el => (el.style.background = '#FCBCDB'));
  const workshops = document.querySelectorAll('.events-section');
  workshops.forEach(el => (el.style.background = '#FCBCDB'));
  const owlDots = document.querySelectorAll(
    '.events-section .owl-dots button.owl-dot',
  );
  owlDots.forEach(el => (el.style.background = '#FD0086'));

  // BUTTONS //
  const apply = document.querySelectorAll('.cta_button.apply-cta');
  apply[0].style.background = '#FD0086';
  const submit = document.querySelectorAll('.hs-button');
  submit[0].style.background = '#FD0086';
  submit[0].style.border = '#FD0086';
  const learnMore = document.querySelectorAll('.primary-button');
  learnMore.forEach(el => (el.style.background = '#FD0086'));
  // text color for bottom buttoms
  // const bottomText = document.querySelectorAll('.cta-section .calendly_outer ');
  // bottomText.forEach(el => el.style.color = 'white');

  // update box shadow on best bootcamp section
  const bestBootcamp = document.querySelector('#award_module > div > div');
  bestBootcamp.style.boxShadow = '0 0 18px rgba(253, 0, 134, .15)';

  // IMAGES //

  // update image one
  const imgOne = document.querySelector(
    '#hs_cos_wrapper_widget_1657116293820 > section > div.content-wrapper > div > div.img-block > div.img-one > img',
  );

  imgOne.src =
    'https://ae01.alicdn.com/kf/H96b5b6e694e844aea4f0aadfd2bb6faa6.jpg_640x640q90.jpg';

  imgOne.srcset =
    'https://ae01.alicdn.com/kf/H96b5b6e694e844aea4f0aadfd2bb6faa6.jpg_640x640q90.jpg 138w, https://ae01.alicdn.com/kf/H96b5b6e694e844aea4f0aadfd2bb6faa6.jpg_640x640q90.jpg 276w, https://ae01.alicdn.com/kf/H96b5b6e694e844aea4f0aadfd2bb6faa6.jpg_640x640q90.jpg 414w, https://ae01.alicdn.com/kf/H96b5b6e694e844aea4f0aadfd2bb6faa6.jpg_640x640q90.jpg 552w, https://ae01.alicdn.com/kf/H96b5b6e694e844aea4f0aadfd2bb6faa6.jpg_640x640q90.jpg 690w, https://ae01.alicdn.com/kf/H96b5b6e694e844aea4f0aadfd2bb6faa6.jpg_640x640q90.jpg 828w';

  // update image two
  const imgTwo = document.querySelector(
    '#hs_cos_wrapper_widget_1657116293820 > section > div.content-wrapper > div > div.img-block > div.img-two > img',
  );

  imgTwo.src =
    'https://media.npr.org/assets/img/2014/11/22/computer_barbie_custom-79ea4462d4db58625c1ef0dc8d28004360f9b749.jpg';

  imgTwo.srcset =
    'https://media.npr.org/assets/img/2014/11/22/computer_barbie_custom-79ea4462d4db58625c1ef0dc8d28004360f9b749.jpg 101w, https://media.npr.org/assets/img/2014/11/22/computer_barbie_custom-79ea4462d4db58625c1ef0dc8d28004360f9b749.jpg 202w, https://media.npr.org/assets/img/2014/11/22/computer_barbie_custom-79ea4462d4db58625c1ef0dc8d28004360f9b749.jpg 303w, https://media.npr.org/assets/img/2014/11/22/computer_barbie_custom-79ea4462d4db58625c1ef0dc8d28004360f9b749.jpg 404w, https://media.npr.org/assets/img/2014/11/22/computer_barbie_custom-79ea4462d4db58625c1ef0dc8d28004360f9b749.jpg 505w, https://media.npr.org/assets/img/2014/11/22/computer_barbie_custom-79ea4462d4db58625c1ef0dc8d28004360f9b749.jpg 606w';

  // update image last
  const imgLast = document.querySelector(
    '#hs_cos_wrapper_widget_1657116293820 > section > div.content-wrapper > div > div.img-block > div.img-last > img',
  );

  imgLast.src =
    'https://res.cloudinary.com/mfrazb/image/upload/v1691693335/barbies_at_tableArtboard_1_s9ydka.png';

  imgLast.srcset =
    'https://res.cloudinary.com/mfrazb/image/upload/v1691693335/barbies_at_tableArtboard_1_s9ydka.png 111w, https://res.cloudinary.com/mfrazb/image/upload/v1691693335/barbies_at_tableArtboard_1_s9ydka.png 222w, https://res.cloudinary.com/mfrazb/image/upload/v1691693335/barbies_at_tableArtboard_1_s9ydka.png 333w, https://res.cloudinary.com/mfrazb/image/upload/v1691693335/barbies_at_tableArtboard_1_s9ydka.png 444w, https://res.cloudinary.com/mfrazb/image/upload/v1691693335/barbies_at_tableArtboard_1_s9ydka.png 555w, https://res.cloudinary.com/mfrazb/image/upload/v1691693335/barbies_at_tableArtboard_1_s9ydka.png 666w';

  // update software engineering immersive image
  const willSentanceImg = document.querySelector(
    '#hs_cos_wrapper_widget_1657109223471 > section > div > ul > li.full-block > div > div.image-outer > div',
  );
  willSentanceImg.style.backgroundImage =
    'url(https://i.ytimg.com/vi/LIu-3j34fe8/mqdefault.jpg)';

  // update JS for beginners image
  const studentTableImg = document.querySelector(
    '#hs_cos_wrapper_widget_1657109223471 > section > div > ul > li:nth-child(2) > div > div.image-outer > div',
  );
  studentTableImg.style.backgroundImage =
    'url(https://res.cloudinary.com/mfrazb/image/upload/v1691693682/jsforbeginnersbarbiesArtboard_1_zy8mcs.png)';

  // update CS Prep image
  const csPrepImg = document.querySelector(
    '#hs_cos_wrapper_widget_1657109223471 > section > div > ul > li:nth-child(3) > div > div.image-outer > div',
  );
  csPrepImg.style.backgroundImage =
    'url(https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/11/21/1416571342119/Barbie-at-a-computer-012.jpg?width=620&quality=85&auto=format&fit=max&s=55aed1cbce8b5ff7f8a3335e0e9b62a6)';

  // update apply in 4 steps image
  const libraryStudents = document.querySelector(
    '#admissions > div > div > div.img-block-out > div.bg-img-out > div',
  );
  libraryStudents.style.backgroundImage =
    'url(https://miro.medium.com/v2/resize:fit:640/1*yAwKRJMTECrXJPvUDd2fxg.jpeg)';

  // WORKSHOPS IMAGES

  // update inperson pair programming img

  const inPersonImg = document.querySelector(
    '#events-slider > div.owl-stage-outer > div > div:nth-child(1) > div > div > div.event-img-out > a > div',
  );

  inPersonImg.style.backgroundImage =
    'url(https://i.ytimg.com/vi/yK_gvTx0zoU/maxresdefault.jpg)';

  // update remote pair programming image
  const pairProgImg = document.querySelector(
    '#events-slider > div.owl-stage-outer > div > div:nth-child(2) > div > div > div.event-img-out > a > div',
  );

  pairProgImg.style.backgroundImage =
    'url(https://i.ytimg.com/vi/0qmjsYOqQaM/maxresdefault.jpg)';

  // update JSHP image
  const jshpImg = document.querySelector(
    '#events-slider > div.owl-stage-outer > div > div.owl-item.active > div > div > div.event-img-out > a > div',
  );

  jshpImg.style.backgroundImage =
    'url(https://www.evodesk.com/blog/wp-content/uploads/2016/02/game-developer-barbie.jpg)';


  const openHouse = document.querySelector("#events-slider > div.owl-stage-outer > div > div:nth-child(3) > div > div > div.event-img-out > a > div");
  openHouse.style.backgroundImage = 'url(https://images.mansionglobal.com/im-50684050?width=1280&size=1)';


    
  // SPARKLE
  // const body = document.querySelector('body');
  // const container = document.createElement('div');
  // container.class = 'sparkle';
  // container.src = '/Users/supsup/Downloads/confetti_anim_dm.png';
  // body.appendChild(container);

  // const intro = document.querySelector('sparkle');
  // window.addEventListener('DOMContentLoaded', () => {
  //   setTimeout();
  // });
}

// barbify();
