const left_btn = document.getElementById('left-btn');
const right_btn = document.getElementById('right-btn');

const slider = document.getElementById('slider');


left_btn.addEventListener('click',(e)=>{

  const sliderWidth = slider.offsetWidth;
  e.preventDefault();

  if(slider.scrollLeft === 0){
    slider.scrollLeft = slider.scrollWidth;
  }

  slider.scrollLeft -= slider.offsetWidth;
})

right_btn.addEventListener('click',(e)=>{
  const sliderWidth = slider.offsetWidth;
  e.preventDefault();

  if(slider.scrollLeft === (slider.scrollWidth-sliderWidth)){
    slider.scrollLeft = 0;
  }

  slider.scrollLeft += slider.offsetWidth;
})