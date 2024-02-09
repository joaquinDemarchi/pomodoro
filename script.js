const tasks = []
let time = 0
let timer = null
let timerBreak = null

const bAdd = document.querySelector('#bAdd');
const itTask = document.querySelector('#itTask');
const form = document.querySelector('#form');

//dice que se dispare una fucnion cuando se eejecute el submit
form.addEventListener('submit',e =>{
    //con esta primera linea anulamos el comportamiento por defecto del submit
    e.preventDefault();
    if(isTask.value != ''){
        createTask(itTask.value);
        itTask.value = '';
        rederTasks()
    }
})

function createTask(value){
    const newTask = {
        id: (Math.random()*100).toString(36).slice(3),
        title: value,
        completed: false,
    };

    tasks.unshift(newTask);
}

function renderTasks(){
    const html = tasks.map(task =>{
        //regresa arreglo de strings
        return `
            <div class = "task">
                <div class = "completed">
                ${ 
                    task.completed ? `<span class="done"> Done </span>` 
                    : ` <button class="start-button" data-id="${task.id}"> Start </button>`
                }
                </div>
                <div class = "title">${task.title}</div>
            </div>
        `
    })

    const tasksContainer = document.querySelector('#tasks');
    //unimos arreglo de strings
    tasksContainer.innerHTML = html.join('')
}