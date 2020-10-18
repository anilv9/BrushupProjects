//get modal ele

var modal = document.getElementById("simpleModal");

var modalBtn = document.getElementById("modalBtn");

//get close btn
var closeBtn = document.getElementsByClassName("closeBtn")[0];

//listen for cleick

modalBtn.addEventListener('click', openModal);

//funtion to open modal
function openModal(){
  // console.log(212);
  modal.style.display = 'block';
}

//listen for close btn
closeBtn.addEventListener('click', closeModal);

//function to close modal
function closeModal(){
  modal.style.display = 'none';
}

//listen for outside click
window.addEventListener('click', clickOutside);

function clickOutside(e){
  if(e.target==modal){
    modal.style.display='none';

  }
}