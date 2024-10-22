const tabBtnsIntro = Array.from(document.querySelectorAll(".intro__btn"));
const tabIndicatorIntro = document.querySelector("#intro__indicator");
const tabSlideIntro = Array.from(document.querySelectorAll(".intro__media-video"));
const contentTitleIntro = Array.from(document.querySelectorAll(".intro__content-title"));

tabBtnsIntro[0].classList.add("active");
tabSlideIntro[0].classList.add("active");
contentTitleIntro[0].classList.add("active");

let activeBtnIntro = tabBtnsIntro[0];
let activeSlideIntro = tabSlideIntro[0];
let activeTitleIntro = contentTitleIntro[0];

tabBtnsIntro.forEach((el) => {
  el.addEventListener("click", onTabBtnClickIntro);
});

function onTabBtnClickIntro(e) {
  e.preventDefault();
  const btnIntro = e.target.closest(".intro__btn");
  changeBtnIntro(btnIntro);
}

function changeBtnIntro(btnIntro) {
  if (btnIntro.classList.contains("active")) {
    return;
  }
  activeBtnIntro.classList.remove("active");
  btnIntro.classList.add("active");
  activeBtnIntro = btnIntro;
  changeIndicatorIntro(btnIntro);
}

function changeIndicatorIntro(btnIntro) {
  const indexBtnIntro = tabBtnsIntro.indexOf(btnIntro);
  const indexIntro = tabBtnsIntro.indexOf(btnIntro);
  tabIndicatorIntro.style.left = `calc(${indexBtnIntro}*100%/3)`;
  changeSlideIntro(indexBtnIntro);
  changeTitleIntro(indexIntro);
}

function changeSlideIntro(indexIntro) {
  activeSlideIntro.classList.remove("active");
  tabSlideIntro[indexIntro].classList.add("active");
  activeSlideIntro = tabSlideIntro[indexIntro];
}

function changeTitleIntro(indexIntroTitle) {
  activeTitleIntro.classList.remove("active");
  contentTitleIntro[indexIntroTitle].classList.add("active");
  activeTitleIntro = contentTitleIntro[indexIntroTitle];
}





const tabBtns = Array.from(document.querySelectorAll('.tab__btn'));
const tabIndicator = document.querySelector(".tab__indicator");
const tabSlide = Array.from(document.querySelectorAll(".tab__slide"));
const root = document.querySelector(":root");

const numBtns = tabBtns.length;

root.style.setProperty(2, numBtns);

tabBtns[0].classList.add("active");
tabSlide[0].classList.add("active");

let activeBtn = tabBtns[0];
let activeSlide = tabSlide[0];

tabBtns.forEach((el) => {
  el.addEventListener("click", onTabBtnClick);
});

function onTabBtnClick(e) {
  e.preventDefault();
  const btn = e.target.closest(".tab__btn");
  changeBtn(btn);
}

function changeBtn(btn) {
  if (btn.classList.contains("active")) {
    return;
  }
  activeBtn.classList.remove("active");
  btn.classList.add("active");
  activeBtn = btn;
  changeIndicator(btn);
}

function changeIndicator(btn) {
  const indexBtn = tabBtns.indexOf(btn);
  tabIndicator.style.top = `calc(${indexBtn}*100%/${numBtns} + 10px)`;
  changeSlide(indexBtn);
}

function changeSlide(index) {
  activeSlide.classList.remove("active");
  tabSlide[index].classList.add("active");
  activeSlide = tabSlide[index];
}


const headerBurger = document.getElementById('burger');
const headerSection = document.querySelector('.header');

headerBurger.addEventListener('click', function() {
  headerSection.classList.toggle('open')
});


const elementPhone = document.getElementById('phone');
const maskOptions = {
  mask: /^[0-9]\d{0,17}$/,
  lazy: false
};
const mask = IMask(elementPhone, maskOptions);

const elementPhoneTwo = document.getElementById('phone-2');
const maskOptionsTwo = {
  mask: /^[0-9]\d{0,17}$/,
  lazy: false
};
const maskTwo = IMask(elementPhoneTwo, maskOptions);



IMask(
  document.getElementById('number'),
  {
    mask: Number,
    min: 0,
    max: 100000000,
    thousandsSeparator: ' '
  }
);


const contactsTabBtns = Array.from(document.querySelectorAll(".contacts__tab-btn"));
const contactsTabIndicator = document.querySelector("#contacts__tab-indicator");
const contactsTabSlide = Array.from(document.querySelectorAll(".contacts__tab-slide"));
const contactsRoot = document.querySelector(":root");

const contactsNumBtns = contactsTabBtns.length;

contactsRoot.style.setProperty("--num-btns", contactsNumBtns);

contactsTabBtns[0].classList.add("active");
contactsTabSlide[0].classList.add("active");

let contactsActiveBtn = contactsTabBtns[0];
let contactsActiveSlide = contactsTabSlide[0];

contactsTabBtns.forEach((el) => {
  el.addEventListener("click", contactsOnTabBtnClick);
});

function contactsOnTabBtnClick(e) {
  e.preventDefault();
  const contactsBtn = e.target.closest(".contacts__tab-btn");
  contactsChangeBtn(contactsBtn);
}

function contactsChangeBtn(contactsBtn) {
  if (contactsBtn.classList.contains("active")) {
    return;
  }
  contactsActiveBtn.classList.remove("active");
  contactsBtn.classList.add("active");
  contactsActiveBtn = contactsBtn;
  contactsChangeIndicator(contactsBtn);
}

function contactsChangeIndicator(contactsBtn) {
  const contactsIndexBtn = contactsTabBtns.indexOf(contactsBtn);
  contactsTabIndicator.style.left = `calc(${contactsIndexBtn}*100%/${contactsNumBtns})`;
  contactsChangeSlide(contactsIndexBtn);
}

function contactsChangeSlide(index) {
  contactsActiveSlide.classList.remove("active");
  contactsTabSlide[index].classList.add("active");
  contactsActiveSlide = contactsTabSlide[index];
}



const offset = 1000;
const scrollUp = document.querySelector('.scroll-top');
const getTop = () => window.pageYOset || document.documentElement.scrollTop;

window.addEventListener('scroll', () => {
  if (getTop() > offset) {
    scrollUp.classList.add('scroll-top--show');
  } else {
    scrollUp.classList.remove('scroll-top--show');
  }
});

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});