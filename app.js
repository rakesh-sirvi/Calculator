const numButtons = document.querySelectorAll('.num');
const opButtons = document.querySelectorAll('.op');
const prev = document.querySelector('#prev');
const curr = document.querySelector('#curr');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const compute = document.querySelector('#compute');

numButtons.forEach(button => button.addEventListener('click', (e) => {
  curr.innerText += e.target.value;
}));

opButtons.forEach(button => button.addEventListener('click', (e) => {
  let last = curr.innerText.slice(-1);
  if (last === '/' || last === '*' || last === '-' || last === '+') {
    curr.innerText = curr.innerText.slice(0, -1) + e.target.value.toString();
  } else {
    curr.innerText += e.target.value.toString();
  }
}));

del.addEventListener('click', () => {
  curr.innerText = curr.innerText.slice(0, -1);
});

clear.addEventListener('click', () => {
  curr.innerText = '';
  prev.innerText = '';
});

compute.addEventListener('click', () => {
  try{
    prev.innerText = curr.innerText;
    curr.innerText = eval(curr.innerText);
  }catch(err){
    prev.innerText = 'Invalid expression'
  }
});
