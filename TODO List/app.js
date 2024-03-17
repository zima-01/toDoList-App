
const form = document.querySelector('#todo_form');
const input = document.querySelector('.js_input');
const list = document.querySelector('.msg');
let data = [];

function init(complete){
  data.forEach(e => {
    let li = document.createElement('li');
    li.innerHTML = e;

    const delBtn = document.createElement('button');
    delBtn.innerHTML = '';

    li.append('', delBtn);
    list.append(li);

  });

}
init();
///

form.addEventListener('submit', event => {
 event.preventDefault();
  toDoLine();
  input.value = '';
});


list.addEventListener('click', event =>{
  if(event.target.tagName === 'LI'){
    event.target.classList.toggle('checked');
  }
});


list.addEventListener('click', event => {
  if(event.target.nodeName === 'BUTTON'){
    event.target.closest('LI').remove();
  }
});

function toDoLine(){

  if(input.value !== ''){
    const toDo = input.value;
   const newLi = document.createElement('li');
    newLi.innerText = toDo;
    const delBtn = document.createElement('button');
    delBtn.innerHTML = 'x';
    newLi.append('', delBtn);// добавляет кнопку
    list.append(newLi);
  }else{

    alert('add something to the list!');
  }
}
