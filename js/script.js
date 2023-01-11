const btnStart=document.querySelector('.start');
const btnStop=document.querySelector('.stop');
const btnReset=document.querySelector('.reset');

let count=0,startCount;

btnStart.addEventListener('click',()=>{
  startCount=setInterval(()=>{
    count++;
    showCount();
  },1000);
});

btnStop.addEventListener('click',()=>{
  clearInterval(startCount);
});

btnReset.addEventListener('click',()=>{
  count=0;
  clearInterval(startCount);
  showCount();
});

function showCount(){
  counter=count<10?'0'+count:count;
  document.querySelector('.counter').innerText=counter;
}

