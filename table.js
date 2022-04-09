//each game needs its own id

let id = 0;
let error = false;
let errorMessage = document.createElement('div');
let createMessage;
let submitError = document.getElementById('error');

document.getElementById('add').addEventListener('click',() =>{
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    


    if(document.getElementById('console').value !== ''){
        row.setAttribute('id',`item-${id}`);
        row.insertCell(0).innerHTML = document.getElementById('new-game').value;
        row.insertCell(1).innerHTML=document.getElementById('console').value;
        row.insertCell(2).innerHTML=document.getElementById('purchase-date').value;
        row.insertCell(3).innerHTML=document.getElementById('purchase-price').value;
        let actions = row.insertCell(4);
        actions.appendChild(createDeleteButton(id++));
        document.getElementById('new-game').value='';
        document.getElementById('console').value='';
        document.getElementById('purchase-date').value='';
        document.getElementById('purchase-price').value='';
        
        //if statement removes error message

        if (error === true){
            submitError.removeChild(errorMessage);
            submitError.classList.toggle('alert-warning');
            submitError.classList.toggle('alert');
            error = false
        }
    
    //statement below creates and adds error message.
        
    } else {
        if (error === false){
        createMessage = errorMessage.innerHTML='Please select console.';
        submitError.appendChild(errorMessage);
        submitError.classList.toggle('alert-warning');
        submitError.classList.toggle('alert');
        error = true;
        }
    }


})  

function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.id = id;
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let elementToDelete = document.getElementById(`item-${id}`);
        elementToDelete.parentNode.removeChild(elementToDelete);
    }
    return btn;
}