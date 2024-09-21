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

root.style.setProperty("--num-btns", numBtns);

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



const swiperAwards = new Swiper('.awards__slider', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: false,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});



document.querySelectorAll('.accordeon__trigger').forEach((item) => {
  item.addEventListener('click', () => {
    item.parentNode.classList.toggle('accordeon__item--active');
    item.classList.toggle('accordeon__trigger--opened');
  });
});



// document.querySelector('input[type="number"]').addEventListener('input', function(e) {
//   e.target.value = e.target.value.replace(/\D+/g, "");  // Прощайте, лишние символы!
// });

// const elementPhone = document.getElementById('number');
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
)




const formTitle = document.querySelectorAll('.contacts__items-title');
const formBlock = document.querySelectorAll('.form');

formTitle.forEach((title) => {
  title.addEventListener('click', () => {
    formBlock.forEach((block) => {
      block.classList.add('hidden')
    })
    formTitle.forEach((block) => {
      block.classList.remove('contacts__items-title--active')
    })
    const contentForm = document.querySelector('#' + title.dataset.tab);
    contentForm.classList.remove('hidden')
    title.classList.add('contacts__items-title--active')
  })
});

