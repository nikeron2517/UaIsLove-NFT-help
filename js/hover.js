const boxCar = document.querySelector('.intro__car-box');
const boxBike = document.querySelector('.intro__bike-box');
const boxInfo = document.querySelector('.intro__info-box');




// -----------------------boxCar-----------------------------------

boxCar.addEventListener('mouseover', (e) => {
  boxCar.classList.add('intro__car-box--active');
  document.querySelector('.hover-overlay').classList.add('hover-overlay-on');
  
})


boxCar.addEventListener('mouseout', (e) => {
  boxCar.classList.remove('intro__car-box--active');
  document.querySelector('.hover-overlay').classList.remove('hover-overlay-on');
})

// // -----------------------boxBike-----------------------------------

boxBike.addEventListener('mouseover', (e) => {
  boxBike.classList.add('intro__bike-box--active');
  document.querySelector('.hover-overlay').classList.add('hover-overlay-on');
})


boxBike.addEventListener('mouseout', (e) => {
  boxBike.classList.remove('intro__bike-box--active');
  document.querySelector('.hover-overlay').classList.remove('hover-overlay-on');
})

// -----------------------boxInfo-----------------------------------

boxInfo.addEventListener('mouseover', (e) => {
  boxInfo.classList.add('intro__info-box--active');
  document.querySelector('.hover-overlay').classList.add('hover-overlay-on');
  document.querySelector('.helping-info').classList.add('helping-info--active')
})


boxInfo.addEventListener('mouseout', (e) => {
  boxInfo.classList.remove('intro__info-box--active');
  document.querySelector('.hover-overlay').classList.remove('hover-overlay-on');
  document.querySelector('.helping-info').classList.remove('helping-info--active')
})