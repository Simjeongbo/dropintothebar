
let all = document.querySelector('.all_btn');
let all_close = document.getElementById('all_close');

let link = document.querySelector('.alcohol');
let linkHr1 = document.getElementById('linkHr1');
let linkHr2 = document.getElementById('linkHr2');
let linkHr3 = document.getElementById('linkHr3');
let linkHr4 = document.getElementById('linkHr4');
let linkHr5 = document.getElementById('linkHr5');





let showBtn1 = document.getElementById('btn_1');
let imgbox1 = document.getElementById('alcohol_1');
let showBtn2 = document.getElementById('btn_2');
let imgbox2 = document.getElementById('alcohol_2');
let showBtn3 = document.getElementById('btn_3');
let imgbox3 = document.getElementById('alcohol_3');
let showBtn4 = document.getElementById('btn_4');
let imgbox4 = document.getElementById('alcohol_4');
let showBtn5 = document.getElementById('btn_5');
let imgbox5 = document.getElementById('alcohol_5');

let link1 = document.querySelector('.link1');
let link2 = document.querySelector('.link2');
let link3 = document.querySelector('.link3');
let link4 = document.querySelector('.link4');
let link5 = document.querySelector('.link5');

let close1 = document.getElementById('close1');
let close2 = document.getElementById('close2');
let close3 = document.getElementById('close3');
let close4 = document.getElementById('close4');
let close5 = document.getElementById('close5');


all.addEventListener('click', function () {
  showBtn1.style = 'top : 100%'
  imgbox1.style = 'top : 0%'
  showBtn2.style = 'top : -10%'
  imgbox2.style = 'top : 0'
  showBtn3.style = 'top : 100%'
  imgbox3.style = 'top : 0%'
  showBtn4.style = 'top : -10%'
  imgbox4.style = 'top : 0'
  showBtn5.style = 'top : 100%'
  imgbox5.style = 'top : 0%'
  close1.style.display = 'none'
  close2.style.display = 'none'
  close3.style.display = 'none'
  close4.style.display = 'none'
  close5.style.display = 'none'
  setTimeout(function () {
    all_close.style.display = 'block'
  }, 800);
})

all_close.addEventListener('click', function () {
  showBtn1.style = 'top : -6%'
  imgbox1.style = 'top : -106%'
  showBtn1.style = 'top : -6%'
  imgbox1.style = 'top : -106%'
  showBtn2.style = 'top : 96%'
  imgbox2.style = 'top : 106%'
  showBtn3.style = 'top : -6%'
  imgbox3.style = 'top : -106%'
  showBtn4.style = 'top : 96%'
  imgbox4.style = 'top : 106%'
  showBtn5.style = 'top : -6%'
  imgbox5.style = 'top : -106%'
  setTimeout(function () {
    close1.style.display = 'block'
    close2.style.display = 'block'
    close3.style.display = 'block'
    close4.style.display = 'block'
    close5.style.display = 'block'
  }, 500);
  all_close.style.display = 'none'
})


showBtn1.addEventListener('click', function () {
  showBtn1.style = 'top : 100%'
  imgbox1.style = 'top : 0'
})
showBtn2.addEventListener('click', function () {
  showBtn2.style = 'top : -10%'
  imgbox2.style = 'top : 0'
})
showBtn3.addEventListener('click', function () {
  showBtn3.style = 'top : 100%'
  imgbox3.style = 'top : 0'
})
showBtn4.addEventListener('click', function () {
  showBtn4.style = 'top : -10%'
  imgbox4.style = 'top : 0'
})
showBtn5.addEventListener('click', function () {
  showBtn5.style = 'top : 100%'
  imgbox5.style = 'top : 0'
})

close1.addEventListener('click', function () {
  showBtn1.style = 'top : -6%'
  imgbox1.style = 'top : -106%'
})
close2.addEventListener('click', function () {
  showBtn2.style = 'top : 96%'
  imgbox2.style = 'top : 106%'
})
close3.addEventListener('click', function () {
  showBtn3.style = 'top : -6%'
  imgbox3.style = 'top : -106%'
})
close4.addEventListener('click', function () {
  showBtn4.style = 'top : 96%'
  imgbox4.style = 'top : 106%'
})
close5.addEventListener('click', function () {
  showBtn5.style = 'top : -6%'
  imgbox5.style = 'top : -106%'
})


link1.addEventListener('click', function () {
  imgbox1.style.width = "100vw"
  imgbox1.style.top = "0"
  imgbox1.style.zIndex = "5"
  soju.style.width = "100vw"
  soju.style.height = "100vh"
  soju.style.transform = "translateX(0)"
  link1.style.display = 'none'
  linkHr1.style.display = 'none'
  close1.style.display = 'none'
  setTimeout(function () {
    window.location.href = 'https://teamsoju.netlify.app/'
  }, 2000);
})
link2.addEventListener('click', function () {
  imgbox2.style.width = "100vw"
  imgbox2.style.top = "0"
  imgbox2.style.left = "0"
  imgbox2.style.zIndex = "5"
  beer.style.width = "100vw"
  beer.style.height = "100vh"
  beer.style.transform = "translateX(0)"
  link2.style.display = 'none'
  linkHr2.style.display = 'none'
  close2.style.display = 'none'
  setTimeout(function () {
    window.location.href = 'https://teambeer.netlify.app/'
  }, 2000);
})
link3.addEventListener('click', function () {
  imgbox3.style.width = "100vw"
  imgbox3.style.top = "0"
  imgbox3.style.left = "0"
  imgbox3.style.zIndex = "5"
  막걸리.style.width = "100vw"
  막걸리.style.transform = "translateX(0)"
  link3.style.display = 'none'
  linkHr3.style.display = 'none'
  close3.style.display = 'none'
  setTimeout(function () {
    window.location.href = 'https://teammakgulli.netlify.app/'
  }, 2000);
})
link4.addEventListener('click', function () {
  imgbox4.style.width = "100vw"
  imgbox4.style.top = "0"
  imgbox4.style.left = "0"
  imgbox4.style.zIndex = "5"
  vodka.style.width = "100vw"
  vodka.style.height = "100vh"
  vodka.style.transform = "translateX(0)"
  link4.style.display = 'none'
  linkHr4.style.display = 'none'
  close4.style.display = 'none'
  setTimeout(function () {
    window.location.href = 'https://teamvodka.netlify.app/'
  }, 2000);
})
link5.addEventListener('click', function () {
  imgbox5.style.width = "100vw"
  imgbox5.style.top = "0"
  imgbox5.style.left = "0"
  imgbox5.style.zIndex = "5"
  wine.style.width = "100vw"
  wine.style.height = "100vh"
  wine.style.transform = "translateX(0)"
  link5.style.display = 'none'
  linkHr5.style.display = 'none'
  close5.style.display = 'none'
  setTimeout(function () {
    window.location.href = 'https://teamwine.netlify.app/'
  }, 2000);
})

// cursor
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-Links li');

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}


// 스크롤
const info = document.querySelector(".slide_btn");

info.addEventListener("click", clickHandler);

function clickHandler(e) {
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
  setTimeout(function(){
    scroll({
      top: offsetTop,
      behavior: "smooth"
    });
   },500);
}




// 제이쿼리문으로 슬라이드 만든거 
$(document).ready(function (){

  var mySwiper = new Swiper ('.swiper-container', {
    direation: 'horizontal',
    loop:true,
    // autoplay: {
    //   delay: 4000
    // },
    


    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      600: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      // when window width is >= 480px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30
      },
    },  

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable:true
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });



});