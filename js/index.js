// using this file is optional
// you can also load the code snippets in using your browser's console
const main = document.getElementById('main');
main.addEventListener('click', function(event) {
  alert('I was clicked');
})

let divs = document.querySelectorAll('div');
 
 
 // added event listener to bubble the children
 
function bubble(e) {
  console.log(this.firstChild.nodeValue.trim() + ' bubbled');
}
 
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', bubble);
}