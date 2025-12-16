
import { wordCount,charcount,longestWord,mostFrequentWord} from './text.js';
import {ctf,ftc} from './temp.js';
import {add,sub,mul,div,sqrt,mod,pow} from './calc.js';
import {Passwstren} from './passw.js';
import { getRandomQuote } from './quote.js';




let submitbut=document.querySelector('.submit');
submitbut.addEventListener('click',wordanalysis);
document.querySelector('.inele').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      wordanalysis();
    }
  });

function wordanalysis(){
    let word=document.querySelector('.inele').value;
    let result=document.querySelector('.result');
    if(word===''){
        result.innerHTML=`<div><p>Enter a sentence :/</p>
                        </div>`;
        return;
    }
    let wordc=wordCount(word);
    let charc=charcount(word);
    let lonword=longestWord(word);
    let freqw= mostFrequentWord(word);
    result.innerHTML=`<div><p>No of words= ${wordc}</p></div>
                     <div><p>No of char= ${charc}</p></div>
                     <div><p>The longest word= ${lonword}</p></div>
                     <div><p>Most frequent word= ${freqw}</p></div>`;
    document.querySelector('.inele').value='';

}

let submittemp=document.querySelector('.submittemp');
submittemp.addEventListener('click',converttemp);
document.querySelector('.intemp').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      converttemp();
    }
  });
  
  document.querySelector('.inscale').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      converttemp();
    }
  });
  

function converttemp(){
    let temp=document.querySelector('.intemp').value;
    let scale=document.querySelector('.inscale').value.trim().toLowerCase();
    let resulttemp;
    if(scale==='c'){
        resulttemp=ctf(temp);
        document.querySelector('.resulttemp').innerHTML=`<div> 
        <p>The converted Temp = ${resulttemp}F</p>
        </div>`;
    }
    else if(scale==='f'){
        resulttemp=ftc(temp);
        document.querySelector('.resulttemp').innerHTML=`<div> 
        <p>The converted Temp = ${resulttemp}C</p>
        </div>`;
    }
    else if(scale===''){
        resulttemp=ctf(temp);
        document.querySelector('.resulttemp').innerHTML=`<div> 
        <p>The converted Temp = ${resulttemp}F (assuming initial scale is C)</p>
        </div>`;
    }
   
    document.querySelector('.intemp').value='';
    document.querySelector('.inscale').value='';
}

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', (event) => {
  if (!event.target.dataset.op) return;
  const op = event.target.dataset.op;
  let num1 = Number(document.querySelector('.num1').value);
  let num2 = Number(document.querySelector('.num2').value);
  let calr = calculator(num1,num2,op);
  document.querySelector('.resultcalc').innerHTML=`<p> Result = ${calr}</p>`
  document.querySelector('.num1').value='';
  document.querySelector('.num2').value='';
});

function calculator(a,b,op){
  if(op==='add'){
    return add(a, b);
  }
  else if(op==='sub'){
    return sub(a,b);
  }
  else if(op==='mul'){
    return mul(a,b);
  }
  else if(op==='div'){
    return div(a,b);
  }
  else if(op==='pow'){
    return pow(a,b);
  }
  else if(op==='sqrt'){
    return sqrt(a);
  }
  else if(op==='mod'){
    return mod(a,b);
  }
}


document.querySelector('.submitpass').addEventListener('click',()=>{
  passwordstrengethcheck();
});

document.querySelector('.inpass').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    passwordstrengethcheck();
  }
});

function passwordstrengethcheck(){
  let pass=document.querySelector('.inpass').value;
  let strength= Passwstren(pass);
  document.querySelector('.resultpass').innerHTML=`<div> 
        <p>The strength of your password is ${strength}</p>
        </div>`;
  document.querySelector('.inpass').value='';
}

document.querySelector('.generate').addEventListener('click', () => {
  const quote = getRandomQuote();
  document.querySelector('.randomq').innerHTML = `<p>${quote}</p>`;
});
