let btn=document.getElementById("btn");
let olList=document.getElementById("ol");
let ID=Date.now();

window.onload  = function(){
    let alltodos = []
    if(this.localStorage.getItem('todos')){
        alltodos = JSON.parse(this.localStorage.getItem('todos'))

        alltodos.forEach((todo)=>{
            let liTag=document.createElement("li");
             liTag.classList.add("li-items");
             liTag.innerHTML=`${todo.value} <button onclick="removeElement(this)" id=${todo.ID} class="btn btn-sm btn-danger">X</button>`;
             olList.appendChild(liTag);
                              })
                                          }
                            }
            
function removeElement(e){
    let ID = e.id

    e.parentElement.remove()
    let allTodo=JSON.parse(localStorage.getItem("todos"));
    let updatedTodos= allTodo.filter(el=>{
         if (ID != el.ID)
         { return el }
    })

    localStorage.setItem("todos",JSON.stringify(updatedTodos))
}
 btn.addEventListener("click",()=>{
     let ID = Date.now()
    let inp= document.getElementById("myInput");
    let liTag=document.createElement("li");
    liTag.classList.add("li-items");
    liTag.innerHTML=`${inp.value} <button onclick="removeElement(this)" class="btn btn-sm id=${ID} btn-danger">X</button>`;
    olList.appendChild(liTag);

   
    let allTodo=[];
    if(localStorage.getItem('todos'))
        {
         allTodo=JSON.parse(localStorage.getItem('todos'));
        }
    allTodo.push({ID,value:inp.value});
    console.log(JSON.stringify(allTodo));
    localStorage.setItem('todos',JSON.stringify(allTodo));
    inp.value='';
})
