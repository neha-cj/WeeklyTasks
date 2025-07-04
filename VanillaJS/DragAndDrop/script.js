document.addEventListener("DOMContentLoaded", () => {
    let draggedItem= null;
    document.querySelectorAll(".draggable").forEach(item=>{
        item.addEventListener("dragstart" ,e =>{
            draggedItem=item;
            setTimeout(()=> item.classList.add("hidden"),0);
        })
        item.addEventListener("dragend",()=>{
            draggedItem.classList.remove("hidden");
            draggedItem=null;
        })
    })
    document.querySelectorAll(".column").forEach(col =>{
        col.addEventListener("dragover",e=>e.preventDefault());
        col.addEventListener("drop",e =>{
            e.preventDefault();
            if(draggedItem) col.appendChild(draggedItem);
        })
    })
})