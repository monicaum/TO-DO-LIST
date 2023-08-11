// localStorage.clear()
var i=1;
function get()
{
      if(localStorage.length!==0)
      {
        var a=Object.keys(localStorage)
        //  arrange value 
        a.sort();
        // console.log(a);
        for(j=0;j<a.length;j++)
        {
          i=j+1
          // localStorage.setItem(i,val);
          var m=document.getElementById('i')
          var b=document.createElement('div')
          m.appendChild(b)
          // directly insert div in body
          // document.body.appendChild(b)
          var c=document.createElement('ul');
          var d=document.createElement('dl');
          d.innerHTML=localStorage.getItem(a[j]);
          // d.innerHTML=`<span>${d}</span>`
          c.appendChild(d);
          b.appendChild(c);
          var btn=document.createElement('button')
          btn.innerText="delete"
          btn.style.backgroundColor="blue";
          btn.style.color="white";
          btn.style.borderBlockColor="blue";
          btn.style.marginLeft="30px"
          d.appendChild(btn)
          btn.id=i;
          b.id=i;
          a.id=i;
          btn.addEventListener("click",(event)=>
          {
                  var del=event.target.id
                  var dis=document.getElementById(del)
                  dis.remove();      
                  localStorage.removeItem(del)
                  // console.log(del);

          })
         i++; 
          // butt.style.marginLeft="100px"
          // console.log(c);
        }
      }
}
 function adds()
  {
    const input=document.getElementById("input");
    const div=document.getElementById("i");
    const val=document.getElementById("input").value.trim();

     if(val !== "")
     {
        const task=document.createElement("ul");
        task.innerHTML=`<span>${val}</span>`;
        // <button class="h">DELETE</button>
        div.appendChild(task);
        // console.log(div);
        input.value=""
        var but=document.createElement("button");
        but.style.backgroundColor="blue";
        but.style.color="white";
        but.style.borderBlockColor="blue";
        but.style.marginLeft="30px"
        but.innerText="delete";
        task.appendChild(but);
        but.id=i;
        localStorage.setItem(i,val);
        but.addEventListener("click",(event)=>
        {
         var s= event.target.id;
         var f=document.getElementById(s)
         task.remove(f);
          localStorage.removeItem(s)
          // console.log(localStorage.getItem(i));
          
        })
        i++;
        // const dele=task.querySelector(".h");
        // dele.addEventListener("click",()=>
        // {
        //   div.removeChild(task);
        //   localStorage.removeItem(i); 
          
        // }); 
     }
     else{
      alert("add a task")
     }
     
  }
  
  