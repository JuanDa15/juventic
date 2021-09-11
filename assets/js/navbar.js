const btn = document.getElementById('btn');
const links = document.querySelector('.links__container');

function toggleNav(actualWidth){
  if(actualWidth <= 820){
    links.classList.add('toggle');
  }else{
    if(links.classList.contains('toggle')){
      links.classList.remove('toggle');
    }
  }
}

window.addEventListener('load',toggleNav(window.visualViewport.width))

window.addEventListener('resize', (e)=> {
  const actualWidth = e.target.visualViewport.width;

  toggleNav(actualWidth);
})

btn.addEventListener('click', ()=> {
  links.classList.toggle('toggle');
  document.querySelector('.button i').classList.toggle('rotate');
})