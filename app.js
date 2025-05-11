document.getElementById('submit').addEventListener('click',()=>save());
document.getElementById('reset').addEventListener('click',()=>reset());
window.addEventListener('keypress',(e)=>{if(e.key === 'Enter'){save()}});
function save(){
  const result = document.querySelector('p');
  const operand = document.querySelector('#selectOperand').value;
  const num1 = document.querySelector('#num1').value;
  const num2 = document.querySelector('#num2').value;

  switch (operand) {
    case 'plus' : result.innerHTML = +num1 + +num2;break;
    case 'min' : result.innerHTML = +num1 - +num2;break;
    case 'mul' : result.innerHTML = +num1 * +num2;break;
    case 'div' : result.innerHTML = +num1 / +num2;
  }
};
function reset(){num1.value = '';num2.value = ''};