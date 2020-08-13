document.addEventListener('DOMContentLoaded',function(){
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');
let heart = document.getElementById('heart');
let pause = document.getElementById('pause');
let likes =  document.getElementById('likes');
let list =document.getElementById('list');
let input =document.getElementById('comment-input');
let submit = document.getElementById('submit');
let form = document.getElementById('comment-form');



form.addEventListener('submit',function(e){
    e.preventDefault();
    let p = document.createElement('p');
    p.innerHTML = input.value;
    list.appendChild(p);
console.log('dfsd');
});


});