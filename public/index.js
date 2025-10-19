//-------------index front-end-------------
const sidebar = document.querySelector('.side-bar');
const closeSidebar = document.querySelector('.close-sidebar');
const menuBtn = document.getElementById("top-bar-menu");

function openSidebar(){
  if (menuBtn.innerText === "menu"){
    sidebar.classList.add('active')
    closeSidebar.classList.add('active')
    menuBtn.innerText = "close";
  } else{
    closeSide();
  }
};

function closeSide(){
  sidebar.classList.remove('active')
  closeSidebar.classList.remove('active')
  menuBtn.innerText = "menu";
};

//-----accordion-functionality--------
const accContent1 = document.getElementById("acc-content1");
const accHeader = document.getElementById("acc-head");

function showacc(){
  if (accContent1.style.display = 'none'){
    accContent1.style.display = 'flex'
  } else if (accContent1.style.display = 'flex'){
    accContent1.style.display = 'none'
  }
}

const Ad1 = document.querySelector('.ad-1')
const Ad2 = document.querySelector('.ad-2')
const Ad3 = document.querySelector('.ad-3')

let adv1 = true;
let adv2 = false;
let adv3 = false;
setInterval(() => {
  if (adv1 === true){
    Ad1.classList.add('show')
    Ad2.classList.remove('show')
    Ad3.classList.remove('show')
    adv1 = false;
    adv2 = true;
    adv3 = false;
  } else if (adv2 === true){
    Ad1.classList.remove('show')
    Ad2.classList.add('show')
    Ad3.classList.remove('show')
    adv1 = false;
    adv2 = false;
    adv3 = true;
  } else{
    Ad1.classList.remove('show')
    Ad2.classList.remove('show')
    Ad3.classList.add('show')
    adv1 = true;
    adv2 = false;
    adv3 = false;
  }
}, 2500);