//fade in effect on h1

//we use the Intersection Observer API
const ratio = 0.4;
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio, // as soon as 40% of the title is visible, the fade in animation is triggered
};

const fadeIn = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(fadeIn, options);
document.querySelectorAll('h1').forEach(function (r) {
  observer.observe(r);
});

// fade effect on all site content

const fonduOpacity = function (entries, observer2) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('fondu-visible');
      observer2.unobserve(entry.target);
    }
  });
};

const observer2 = new IntersectionObserver(fonduOpacity, options);
document.querySelectorAll('.fondu').forEach(function (r) {
  observer2.observe(r);
});

//zoom effect when images appear

const zoomImage = function (entries, observer3) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('zoom-visible');
      observer3.unobserve(entry.target);
    }
  });
};

const observer3 = new IntersectionObserver(zoomImage, options);
document.querySelectorAll('.zoom').forEach(function (r) {
  observer3.observe(r);
});

//zoom effect on images on hover
// first cards
const imgActeurs = document.querySelectorAll('.one .zoom');
const imgActeur1 = imgActeurs[0];
const imgActeur2 = imgActeurs[1];
const imgActeur3 = imgActeurs[2];

const acteurs = document.querySelectorAll('.acteur');
const acteur1 = acteurs[0];
const acteur2 = acteurs[1];
const acteur3 = acteurs[2];

imgActeur1.addEventListener('mouseover', function (e) {
  acteur1.classList.add('acteur-visible');
});
imgActeur1.addEventListener('mouseout', function (e) {
  acteur1.classList.remove('acteur-visible');
});

imgActeur2.addEventListener('mouseover', function () {
  acteur2.classList.add('acteur-visible');
});
imgActeur2.addEventListener('mouseout', function () {
  acteur2.classList.remove('acteur-visible');
});

imgActeur3.addEventListener('mouseover', function () {
  acteur3.classList.add('acteur-visible');
});
imgActeur3.addEventListener('mouseout', function () {
  acteur3.classList.remove('acteur-visible');
});

//second cards

const acts = document.querySelectorAll('.two .zoom');
const act1 = acts[0];
const act2 = acts[1];
const act3 = acts[2];

const perss = document.querySelectorAll('.two .acteur');
const pers1 = perss[0];
const pers2 = perss[1];
const pers3 = perss[2];

act1.addEventListener('mouseover', function (e) {
  pers1.classList.add('acteur-visible');
});
act1.addEventListener('mouseout', function (e) {
  pers1.classList.remove('acteur-visible');
});

act2.addEventListener('mouseover', function (e) {
  pers2.classList.add('acteur-visible');
});
act2.addEventListener('mouseout', function (e) {
  pers2.classList.remove('acteur-visible');
});

act3.addEventListener('mouseover', function (e) {
  pers3.classList.add('acteur-visible');
});
act3.addEventListener('mouseout', function (e) {
  pers3.classList.remove('acteur-visible');
});

//slider in the nemesis part
const lien = document.getElementsByTagName('iframe');

const imgSlide = document.querySelectorAll('.multimedia .none');
const nbSlide = imgSlide.length;
const precedent = document.querySelector('.précédent');
const suivant = document.querySelector('.suivant');
let count = 0;
let srcs = [
  'https://www.youtube.com/embed/jXrFsn9pcZY',
  'https://www.youtube.com/embed/UMgb3hQCb08',
  'https://www.youtube.com/embed/OiqPQ7L_C00',
];

function slideSuivant() {
  imgSlide[count].classList.remove('none-active');

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  imgSlide[count].classList.add('none-active');
  lien[0].src = srcs[count];
}

suivant.addEventListener('click', slideSuivant);

function slidePrécédent() {
  imgSlide[count].classList.remove('none-active');

  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }

  imgSlide[count].classList.add('none-active');
  lien[0].src = srcs[count];
}

precedent.addEventListener('click', slidePrécédent);
 
