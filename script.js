const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

addTask = () => {
    if (inputBox === ''){
    alert('make a list 😤')
    } else {
        let li = document.createElement("li") //make a new li
        li.innerHTML = inputBox.value
        listContainer.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = '\u00d7' // this the x button
        li.appendChild(span) // put the span inside the li
    }
    inputBox.value = ''
    saveData()

}

 //click function
    listContainer.addEventListener("click", function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle('checked') // checks the list
            saveData()
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove() //removes parent element
            saveData()
        }
    }, false)

    saveData =() => {
        localStorage.setItem("tasks",listContainer.innerHTML)
    } 

    showTasks = () => {
        listContainer.innerHTML = localStorage.getItem('tasks') || ""
    }
    showTasks()