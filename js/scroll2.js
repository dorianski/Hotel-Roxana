window.addEventListener('scroll', scrollFunction2);

function scrollFunction2() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.querySelector('.logo2').style.display = "none";
    document.querySelector('.logo').style.height = "5vh";
    document.querySelector('.menu').style.marginTop = "5vh";
    document.querySelector('.menuwrap').style.height = "10vh";
    document.querySelector('.menuwrap').style.backgroundColor = "rgba(0,0,0,0.95)";
    document.getElementById('phone').style.fontSize = "15px";
    document.getElementById('marker').style.fontSize = "15px";
    document.getElementById('phone2').style.fontSize = "15px";
    document.getElementById('marker2').style.fontSize = "15px";
  }else{
    document.querySelector('.logo2').style.display = "block";
    document.querySelector('.logo').style.height = "15vh";
    document.querySelector('.menu').style.marginTop = "15vh";
    document.querySelector('.menuwrap').style.height = "20vh";
    document.querySelector('.menuwrap').style.backgroundColor = "rgba(0,0,0,0.55)";
    document.getElementById('phone').style.fontSize = "30px";
    document.getElementById('marker').style.fontSize = "30px";
    document.getElementById('phone2').style.fontSize = "30px";
    document.getElementById('marker2').style.fontSize = "30px";
  }
}

if(window.innerWidth < 900) {
  window.removeEventListener('scroll',scrollFunction2);
}