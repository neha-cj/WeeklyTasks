fetch('fileStructure.json')
    .then(response => response.json())    
    .then(data => {
        console.log(data);
        recursiveFile(data, document.getElementById('file-container'));
    })
    .catch(error =>console.error("error fecthing Json: ",error))

function recursiveFile(structure, parent){
    structure.forEach(item=>{
        const div = document.createElement('div');
        div.classList.add('ml-4','mt-2');
        if(item.type === 'folder'){
            div.innerHTML='📁'+item.name;
            
            parent.appendChild(div);
            const childrenDiv = document.createElement('div');
            div.appendChild(childrenDiv)

            if(item.children && item.children.length>0){
                recursiveFile(item.children, childrenDiv);
            }
        }else{
            div.innerHTML='📄'+item.name
            parent.appendChild(div);
        }
    })
    
}