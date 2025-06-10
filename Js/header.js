var a2=document.getElementById('a2'),
a3=document.getElementById('a3'),
a4=document.getElementById('a4');
var change_scroll;

const home= () => {
  setTimeout(() => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
  },100);
}
const about = () => {
  var a2=document.getElementById('a2');
  change_scroll=a2;
  change_scroll.style.color='#00ffc3';
  setTimeout(() => {
    window.scrollTo({
      left: 0,
      top: 600,
      behavior: 'smooth',
    });
  },100);
};



const services= () => {
  var a5=document.getElementById('a5');
  a5.style.color='#00ffc3';
  setTimeout(() => {
    window.scrollTo({
      left: 0,
      top: 1200,
      behavior: 'smooth',
    });
  },100);
}

const courses= () => {
  var a3=document.getElementById('a3');
  a3.style.color='#00ffc3';
  setTimeout(() => {
    window.scrollTo({
      left: 0,
      top: 1770,
      behavior: 'smooth',
    });
  },100);
}

const contact= () => {
  let a4=document.getElementById('a4');
  a4.style.color='#00ffc3';
  setTimeout(() => {
    window.scrollTo({
      left: 0,
      top: 2500,
      behavior: 'smooth',
    });
  },100);
}


window.addEventListener('scroll',() => {
  var head=document.getElementById('head');
  var a1=document.getElementById('a1');
  if(this.window.scrollY > 50){
    head.classList.add('scrolled');
    a1.style.color='#00ffc3';
  }else{
    head.classList.remove('scrolled');
    a1.style.color='rgb(0, 183, 255)';
  }
});

a2.style.color='white';