const inbox=document.querySelector(".input input");
const inbutton=document.querySelector(".input button");
const todofield=document.querySelector(".list");
inbox.onkeyup=()=>{
  let indata=inbox.value;
  if(indata.trim()!=0){
     inbutton.classList.add("active");
  }
  else{
    inbutton.classList.remove("active");
  }
};
list();
inbutton.onclick=()=>{
  let indata = inbox.value;
  let ls=localStorage.getItem("to-do");
  if(ls==null){
    arr=[];
  }
  else{
    arr=JSON.parse(ls);
  }
  arr.push(indata);
  localStorage.setItem("to-do",JSON.stringify(arr));
  list();
}

function list(){
  let ls = localStorage.getItem("to-do");
  if (ls == null) {
    arr = [];
  } else {
    arr = JSON.parse(ls);
  }
  const count = document.querySelector(".pendingTasks");
 let listcard='';
  arr.forEach((element,index)=> {
    listcard += `<li> ${element}<span onclick="deletelist(${index})";><i class="fa fa-trash"></i></span></li>`;
  });
  todofield.innerHTML=listcard;
  inbox.value="";
}
function deletelist(index){
   let ls = localStorage.getItem("to-do");
   arr = JSON.parse(ls);
   arr.splice(index,1);
   localStorage.setItem("to-do", JSON.stringify(arr));
   list();
}
