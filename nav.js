const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if(bar){
  bar.addEventListener('click', () => {
      nav.classList.add('active');
  })
}
if(close) {
  close.addEventListener('click', () => {
      nav.classList.remove('active');
  })
}

// blurry image
const loadText = document.querySelector('.loading-text');

const bg = document.getElementById('hero');


let load = 0


let int = setInterval(blurring, 30)
function blurring(){
  load++;

  if (load > 99) {
    clearInterval(int)
  }
  console.log(load);
  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load,0,100,1,0);
  bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max)=>{
  return ((num-in_min) * (out_max-out_min)) / (in_max - in_min) + out_min
}
