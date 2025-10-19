//------landingpage frontend----------
const phoneMenu = document.querySelector('.hand-divice-menu');
const closemenu = document.querySelector('.close-menu');

function showMenu(){
  phoneMenu.classList.add('active')
  closemenu.classList.add('active')
};

function closeMenu(){
  phoneMenu.classList.remove('active')
  closemenu.classList.remove('active')
};

const dashboard = document.querySelector('.dashboard-content');
const myoffice = document.querySelector('.office-content');
const rooms = document.querySelector('.rooms-content');
const marketsCentre = document.querySelector('.markets-centre');

const dashboardBtn = document.getElementById("dashboard-btn");
const officeBtn = document.getElementById("office-btn");
const roomsBtn = document.getElementById("rooms-btn");
const marketsBtn = document.getElementById("markets-btn");

function showDashboard(){
  dashboard.classList.add('active')
  myoffice.classList.remove('active')
  rooms.classList.remove('active')
  marketsCentre.classList.remove('active')

  dashboardBtn.classList.add('active')
  officeBtn.classList.remove('active')
  roomsBtn.classList.remove('active')
  marketsBtn.classList.remove('active')
}
function showOffice(){
  dashboard.classList.remove('active')
  myoffice.classList.add('active')
  rooms.classList.remove('active')
  marketsCentre.classList.remove('active')

  dashboardBtn.classList.remove('active')
  officeBtn.classList.add('active')
  roomsBtn.classList.remove('active')
  marketsBtn.classList.remove('active')
}
function showRooms(){
  dashboard.classList.remove('active')
  myoffice.classList.remove('active')
  rooms.classList.add('active')
  marketsCentre.classList.remove('active')

  dashboardBtn.classList.remove('active')
  officeBtn.classList.remove('active')
  roomsBtn.classList.add('active')
  marketsBtn.classList.remove('active')
}
function showMarketsCentre(){
  dashboard.classList.remove('active')
  myoffice.classList.remove('active')
  rooms.classList.remove('active')
  marketsCentre.classList.add('active')

  dashboardBtn.classList.remove('active')
  officeBtn.classList.remove('active')
  roomsBtn.classList.remove('active')
  marketsBtn.classList.add('active')
}

const accountSum = document.querySelector('.account-summary');
const closeSum = document.querySelector('.close-account-summary');
const shortSum = document.querySelector('.short-summary');
const fullSum = document.querySelector('.full-summary');

function showSummary(){
  accountSum.classList.add('active')
  closeSum.classList.add('active')
  shortSum.classList.remove('active')
  fullSum.classList.add('active')
};
function closeSummary(){
  accountSum.classList.remove('active')
  closeSum.classList.remove('active')
  shortSum.classList.add('active')
  fullSum.classList.remove('active')
};