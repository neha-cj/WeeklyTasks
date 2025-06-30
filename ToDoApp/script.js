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
    if(inputVal.trim() !== ''){
        Mytasks.push({text: inputVal,status:false});
        
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
    taskItem.className='task-item';
    if (task.status) taskItem.classList.add("checked");
    const tasktext = document.createElement("p");
    tasktext.className = "task-div";
    tasktext.innerHTML=task.text;

    const buttonDiv=document.createElement("div");
    buttonDiv.className="task-btns";

    const editbtn= document.createElement("button");
    editbtn.className='edit-button';
    editbtn.innerHTML='<i class="fa fa-pencil"></i>';
    const deletebtn=document.createElement("button");
    deletebtn.className='delete-button';
    deletebtn.innerHTML='<i class="fa fa-trash"></i>';


    //checked
    tasktext.addEventListener("click",()=>{
        task.status =!task.status
        taskItem.classList.toggle("checked",task.status);
        console.log(taskItem.status)
        localStorage.setItem('MyTasks',JSON.stringify(Mytasks));

    })
    //delete function
    deletebtn.onclick=()=>{
        console.log("Delete button clicked for:", task.text);
        taskItem.remove();
        Mytasks = Mytasks.filter(t => t.text !== task.text);
        localStorage.setItem('MyTasks', JSON.stringify(Mytasks));
    }

    buttonDiv.appendChild(editbtn);
    buttonDiv.appendChild(deletebtn);

    taskItem.appendChild(tasktext);
    taskItem.appendChild(buttonDiv);
    return taskItem;
}
