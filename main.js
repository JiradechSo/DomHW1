const counter = document.querySelector(".counter");
const buttonplus = document.querySelector(".btn-inc");
const buttondelete = document.querySelector(".btn-dec");
const buttonc = document.querySelector(".btn-clr");
const isnumber = document.querySelector(".number");
 
isnumber.setAttribute('id', 'num');
buttonplus.setAttribute('onclick', 'buttonplusClick()');
buttondelete.setAttribute('onclick', 'buttondeleteClick()');
buttonc.setAttribute('onclick', 'buttoncClick()');


let count = 0;

function buttonplusClick() {
  count += 1;
  updateCounter();
}

function buttondeleteClick() {
  count -= 1;
  if (count < 0) {
      count = 0;
  }
  updateCounter();
}

function buttoncClick() {
  if (count > 0) {
      count = 0;
  }
  updateCounter();
  showAlert();
}

function updateCounter() {
  document.getElementById('num').innerHTML = count;
}

function showAlert() {
  alert("ลบ counter เหลือ 0 แล้ว\nนายจิรเดช โสภา");
}