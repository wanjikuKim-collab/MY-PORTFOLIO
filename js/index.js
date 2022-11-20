let connectElement = document.getElementsByClassName('.sstart');
   
function changeText(){
    connectElement.innerHTML = 'Proceed';
}
connectElement.addEventListener('click', changeText);

