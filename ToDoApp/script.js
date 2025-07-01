const taskSection=document.getElementById("tasksection");
const inputElement=document.querySelector('.entry-field');

let Mytasks=JSON.parse(localStorage.getItem('MyTasks'))||[];

window.addEventListener('load',()=>{
    console.log(Mytasks);
    taskSection.innerHTML = "";
    const elements = Mytasks.map(task =>createTaskElement(task));
    taskSection.replaceChildren(...elements);
})

function addTask(){
    const inputVal=inputElement.value;
    if(inputVal.trim()!==''){
        Mytasks.push({text:inputVal,status:false});
        
        inputElement.value='';
        const taskItem = createTaskElement(inputVal);
        taskSection.appendChild(taskItem);
        localStorage.setItem('MyTasks',JSON.stringify(Mytasks));
        const elements = Mytasks.map(task => createTaskElement(task));
        taskSection.replaceChildren(...elements);        
    }else{
        alert("please enter a value before adding to array");
    }
}
function createTaskElement(task){
     //creating the task
    const taskItem= document.createElement("div");
    taskItem.className='task-item bg-white flex space-x-3 border border-grey-300 rounded shadow-sm p-4 m-2';
    if (task.status)taskItem.classList.add("line-through","opacity-60");
    const tasktext =document.createElement("p");
    tasktext.className ="flex-grow cursor-pointer";
    tasktext.innerHTML=task.text;

    const buttonDiv=document.createElement("div");
    buttonDiv.className="flex space-x-2";

    const editbtn=document.createElement("button");
    editbtn.className='edit-button text-blue-500 hover:text-blue-700';
    editbtn.innerHTML='<i class="fa fa-pencil"></i>';
    const deletebtn=document.createElement("button");
    deletebtn.className='delete-button text-red-500 hover:text-red-700';
    deletebtn.innerHTML='<i class="fa fa-trash"></i>';


    //checked
    tasktext.addEventListener("click",()=>{
        task.status =!task.status
        taskItem.classList.toggle("line-through",task.status);
        taskItem.classList.toggle("opacity-60", task.status)
        if(task.status){
            editbtn.classList.add("hidden");
            deletebtn.classList.add("hidden")
        }
        else{
            editbtn.classList.remove("hidden");
            deletebtn.classList.remove("hidden");
        }
        localStorage.setItem('MyTasks',JSON.stringify(Mytasks));

    })
    //delete function
    deletebtn.onclick=()=>{
        console.log("delete button clicked for ",task.text);
        taskItem.remove();
        Mytasks = Mytasks.filter(t => t.text!== task.text);
        localStorage.setItem('MyTasks', JSON.stringify(Mytasks));
    }
    editbtn.onclick=()=>{
        console.log("edit button clicked for ",task.text);
        const input=document.createElement("input");
        input.type="text";
        input.className=" px-2 py-1 w-full";
        taskItem.replaceChild(input,tasktext);
        input.focus()
        const save = () =>{
            const newText= input.value.trim();
            if (newText!==""){ 
                task.text=newText;
                
                const p =document.createElement("p");
                p.className="flex-grow cursor-pointer"
                p.innerText =newText;
                localStorage.setItem("MyTasks",JSON.stringify(Mytasks));
                taskItem.replaceChild(p,input);
            }
            else{
                taskItem.replaceChild(tasktext, input)
            }
        }
        input.addEventListener("keydown",(e)=>{
            if(e.key ==="Enter"){
                save();
            }
        });

    }

    buttonDiv.appendChild(editbtn);
    buttonDiv.appendChild(deletebtn);

    taskItem.appendChild(tasktext);
    taskItem.appendChild(buttonDiv);
    return taskItem;
}
