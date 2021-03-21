var newTask = document.getElementById("new-task");
var enterButton = document.getElementById("enter");
var ul = document.querySelector("ul")

function createListElement(){

    //add new task in the list
    var list = document.createElement("li");
    var task = document.createTextNode(newTask.value);
    list.appendChild(task);
    ul.appendChild(list);
    newTask.value = "";
    //----end of new task code----


    //click to mark the task complete
    function completedTask(){
        list.classList.toggle('done');
        console.log("done")
    }

    list.addEventListener('click', completedTask);
    //----end of completed-task code----


    //delete task from list
    var deleteBtn = document.createElement("button");
    var textNode = document.createTextNode("X");
    deleteBtn.appendChild(textNode);
    list.appendChild(deleteBtn);
    deleteBtn.classList.add("delete-button");
    deleteBtn.addEventListener("click", deleteTask);

    function deleteTask(){
        list.classList.add("delete");
    }
    //----end of delete task code----

}

function inputLength(){
   return newTask.value.length;
}

function addListItemsOnClick(){
    if(inputLength()>0){
        createListElement();
    }
}

function addListItemOnKeyPress(event){
    if(inputLength()>0 && event.which===13){
        createListElement();
    }
}

enterButton.addEventListener("click", addListItemsOnClick);

newTask.addEventListener("keypress", addListItemOnKeyPress);