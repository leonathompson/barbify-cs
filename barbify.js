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

// update h2s color

const h2s = document.querySelectorAll('h2');
h2s.forEach(h2 => (h2.style.color = '#FD0086'));

// change the dots to pink
const svg1 = document.querySelector(
  '#hs_cos_wrapper_widget_1657116293820 > section > div.content-wrapper > div > div.img-block > div.top-shape > svg',
);
