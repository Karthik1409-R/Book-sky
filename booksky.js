//selecting popup box popup overlay button

let popupoverlay = document.querySelector('.popup-overlay');
let popupbox = document.querySelector('.popup-box');
let addpopupbutton = document.getElementById('add-popup-button');

addpopupbutton.addEventListener('click',function(){
  popupoverlay.style.display='block';
  popupbox.style.display='block';  
});

//select the cancel button

let cancelpopup = document.getElementById('cancel-popup');
cancelpopup.addEventListener('click',function(event){
    event.preventDefault();
    popupoverlay.style.display='none';
    popupbox.style.display='none';
});     
  
let container = document.querySelector('.container');
let addbook = document.getElementById('add-book');
let booktittleinput = document.getElementById('book-tittle-input');
let bookauthorinput = document.getElementById('book-author-input');
let bookdescriptioninput = document.getElementById('book-description-input');

addbook.addEventListener('click',function(event){
  event.preventDefault();
  let div = document.createElement('div');
  div.setAttribute('class','book-container');
  div.innerHTML=`<h2>${booktittleinput.value}</h2>
          <h5>${bookauthorinput.value}</h5>
          <p>${bookdescriptioninput.value}</p>
          <button onclick="deleteBook()">Delete</button>`;
  container.append(div);
  popupoverlay.style.display='none';
  popupbox.style.display='none ';
});

function deleteBook(event) {
  event.target.parentElement.remove();
}