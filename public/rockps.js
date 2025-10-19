const myMove = document.getElementById("playerpicked");
const computerMv = document.getElementById("computermove");
const results = document.getElementById("results");
const numTies = document.getElementById("num-ties");
const numWins = document.getElementById("num-wins");
const numLoses = document.getElementById("num-loses");
const myReaction = document.getElementById("myReaction");
const progressPerc = document.getElementById("progressPerc");
const bad = document.querySelector('.bad');
const good = document.querySelector('.good');
const better = document.querySelector('.better');
const amountSec = document.getElementById("available-amount");
const addMoney = document.getElementById("addMoney");
const myAvai = document.getElementById("myAvai");
const messege = document.getElementById("mymesseges");
const depositInput = document.querySelector('.deposit-input');
const lotSec = document.getElementById("lot-cash");
const lotInputEl = document.getElementById("lot-amount");
const autoBtn = document.getElementById("autoplay-button")

let numTi = 0;
let numWi = 0;
let numLo = 0;

let amountOb = {
  myMoney: 0,
  mylot: 1,
};

function addAmount(){
  if (addMoney.value < 0.999999999999){
    messege.innerText = "Deposit shouldn't be lower than 1";
    addMoney.value = ''; 
    removeErrMess();
  }
  else{
    amountOb.myMoney = Number(addMoney.value);
    ShowBalance();
    hideMessege();
    checkdeposit();
    updateLot();
    addMoney.value = '';
  }
};

function ShowBalance(){
  checkdeposit();
  myAvai.innerText = `Balance: R${amountOb.myMoney}`;
};
function hideMessege(){
  checkdeposit();
  messege.innerText = '';
};

function placeLot(){
  if (lotInputEl.value > amountOb.myMoney){
    messege.innerText = "Lot cannot be higher than Balance";
    lotInputEl.value = '';
    removeErrMess();
  } else if (lotInputEl < 0.9999999){
    messege.innerText = "Lot shouldn't be less than 1";
    lotInputEl.value = '';
    removeErrMess();
  }
  else {
    amountOb.mylot = Number(lotInputEl.value);
    lotSec.innerText = `R${amountOb.mylot}`;
    updateLot();
    hideMessege();
    lotInputEl.value = '';
  }
};

function updateLot(){
  if (amountOb.myMoney !== 0){
    if (amountOb.mylot > amountOb.myMoney){
      amountOb.mylot = amountOb.myMoney;
      lotSec.innerText = `R${amountOb.mylot}`
    }
    else{
      lotSec.innerText = `R${amountOb.mylot}`
    }
  } else {
    lotSec.innerText = `R${amountOb.mylot}`
  }
};

function rockMove(){
  if (amountOb.myMoney <= 0){
    messege.innerText = "You've insuficient funds, Deposit money to start playing";
    removeErrMess();
  }
  else if (amountOb.mylot < 1){
    messege.innerText = "Lot cannot be less than R1";
    removeErrMess();
  }

  else {
    myMove.innerText = "You picked Rock"

    const computerMove = Math.random();

    if (computerMove <= 0.333333){
      computerMv.innerText = "computer picked Rock"
      results.innerHTML = `<p style="color: grey;">You Tied!</p>`;
      numTi ++;
      numTies.innerText = `Ties: ${numTi}`;
      amountOb.myMoney + 0;
      myAvai.innerText = `Balance: R${amountOb.myMoney}`;
      ShowBalance();

    } else if (computerMove <= 0.6666666){
      computerMv.innerText = "computer picked Paper"
      results.innerHTML = `<p style="color: red;">You lose!</p>`;
      numLo ++;
      numLoses.innerText = `Loses: ${numLo}`;
      amountOb.myMoney -= amountOb.mylot;
      checkdeposit();
      updateLot();
      ShowBalance();
      myAvai.innerText = `Balance: R${amountOb.myMoney}`;
    }
    else {
      computerMv.innerText = "computer picked Scissors"
      results.innerHTML = `<p style="color: green;">You Won!</p>`;
      numWi ++;
      numWins.innerText = `Wins: ${numWi}`;
      amountOb.myMoney += amountOb.mylot;
      ShowBalance();
      myAvai.innerText = `Balance: R${amountOb.myMoney}`;
    }
    let total = numTi + numWi + numLo;
    let percWi = numWi * 100 / total; 

    if (percWi < 33.3333){
      myReaction.innerText = "😭";
      progressPerc.innerText = `33%`
      bad.classList.add('active');
      good.classList.remove('active');
      better.classList.remove('active');
    } 
    else if (percWi < 66.6666) {
      myReaction.innerText = "😎";
      progressPerc.innerText = `66%`;
      bad.classList.remove('active');
      good.classList.add('active');
      better.classList.remove('active');
    }
    else {
      myReaction.innerText = "😂😂🔥";
      progressPerc.innerText = `100%`;
      bad.classList.remove('active');
      good.classList.remove('active');
      better.classList.add('active');
    }
  }
};
function paperMove(){
  if (amountOb.myMoney <= 0){
    messege.innerText = "You've insuficient funds, Deposit money to start playing";
    removeErrMess();
  }
  else if (amountOb.mylot < 1){
    messege.innerText = "Lot cannot be less than R1";
    removeErrMess();
  }
  else {
    myMove.innerText = "You picked Paper"

    const computerMove = Math.random();

    if (computerMove <= 0.333333){
      computerMv.innerText = "computer picked Rock"
      results.innerHTML = `<p style="color: green;">You Won!</p>`;
      numWi ++;
      numWins.innerText = `Wins: ${numWi}`;
      amountOb.myMoney += amountOb.mylot;
      ShowBalance();
      myAvai.innerText = `Balance: R${amountOb.myMoney}`;
    } 
    else if (computerMove <= 0.6666666){
      computerMv.innerText = "computer picked Paper"
      results.innerHTML = `<p style="color: grey;">You Tied!</p>`;
      numTi ++;
      numTies.innerText = `Ties: ${numTi}`;
      amountOb.myMoney + 0;
      myAvai.innerText = `Balance: R${amountOb.myMoney}`;
    }
    else {
      computerMv.innerText = "computer picked Scissors"
      results.innerHTML = `<p style="color: red;">You lose!</p>`;
      numLo ++;
      numLoses.innerText = `Loses: ${numLo}`;
      amountOb.myMoney -= amountOb.mylot;
      checkdeposit();
      updateLot();
      ShowBalance();
      myAvai.innerText = `Balance: R${amountOb.myMoney}`;
    }
    let total = numTi + numWi + numLo;
    let percWi = numWi * 100 / total; 
    progressPerc.innerText = `${percWi}%`;

    if (percWi < 33.3333){
      myReaction.innerText = "😭";
      progressPerc.innerText = `33%`
      bad.classList.add('active');
      good.classList.remove('active');
      better.classList.remove('active');
    } 
    else if (percWi < 66.6666) {
      myReaction.innerText = "😎";
      progressPerc.innerText = `66%`;
      bad.classList.remove('active');
      good.classList.add('active');
      better.classList.remove('active');
    }
    else {
      myReaction.innerText = "😂😂🔥";
      progressPerc.innerText = `100%`;
      bad.classList.remove('active');
      good.classList.remove('active');
      better.classList.add('active');
    }
  }
};

function scissorsMove(){
  if (amountOb.myMoney <= 0){
    messege.innerText = "You've insuficient funds, Deposit money to start playing";
    removeErrMess();
  }
  else if (amountOb.mylot < 1){
    messege.innerText = "Lot cannot be less than R1";
    removeErrMess();
  }
  else {
    myMove.innerText = "You picked Scissors"

    const computerMove = Math.random();

    if (computerMove <= 0.333333){
      computerMv.innerText = "computer picked Rock"
      results.innerHTML = `<p style="color: red;">You lose!</p>`;
      numLo ++;
      numLoses.innerText = `Loses: ${numLo}`;
      amountOb.myMoney -= amountOb.mylot;
      checkdeposit();
      updateLot();
      ShowBalance();
      myAvai.innerText = `Balance: R${amountOb.myMoney}`;
    }
    
    else if (computerMove <= 0.6666666){
      computerMv.innerText = "computer picked Paper"
      results.innerHTML = `<p style="color: green;">You Won!</p>`;
      numWi ++;
      numWins.innerText = `Wins: ${numWi}`;
      amountOb.myMoney += amountOb.mylot;
      ShowBalance();
      myAvai.innerText = `Balance: R${amountOb.myMoney}`;
    }
    else {
      computerMv.innerText = "computer picked Scissors"
      results.innerHTML = `<p style="color: grey;">You Tied!</p>`;
      numTi ++;
      numTies.innerText = `Ties: ${numTi}`;
      amountOb.myMoney + 0;
      myAvai.innerText = `Balance: R${amountOb.myMoney}`;
    }
    let total = numTi + numWi + numLo;
    let percWi = numWi * 100 / total; 
    

    if (percWi < 33.3333){
      myReaction.innerText = "😭";
      progressPerc.innerText = `33%`
      bad.classList.add('active');
      good.classList.remove('active');
      better.classList.remove('active');
    } 
    else if (percWi < 66.6666) {
      myReaction.innerText = "😎";
      progressPerc.innerText = `66%`;
      bad.classList.remove('active');
      good.classList.add('active');
      better.classList.remove('active');
    }
    else {
      myReaction.innerText = "😂😂🔥";
      progressPerc.innerText = `100%`;
      bad.classList.remove('active');
      good.classList.remove('active');
      better.classList.add('active');
    }
  }
};

function checkdeposit(){
  if (amountOb.myMoney <= 0){
      depositInput.style.display = 'flex';
    } else {
      depositInput.style.display = 'none';
  }
}
function removeErrMess(){
  setInterval(() => {
    messege.innerText = "";
  }, 3000);
}

function autoplay(){
  if(autoBtn.innerText === "autoplay"){
    autoBtn.innerText = "stop autoplay";
  }
  else{
    autoBtn.innerText = "autoplay";
    clearInterval(intervalID);
  }
  const intervalID = setInterval(()=>{
    if(autoBtn.innerText === "autoplay"){

      const playermove = Math.random;
      console.log(playermove);
      if (playermove <= 0.3333){
        rockMove();
      }
      if (playermove <= 0.66666666){
        paperMove();
      }
      if (playermove <= 0.9999999999999){
        scissorsMove();
      }
    }
    else{
      clearInterval(intervalID);
    }
  },
  3000);
}


ShowBalance();
checkdeposit();
updateLot();