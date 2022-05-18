
// set timer
const hour = $('#hour')
const minute = $('#minute')
const sec = $('#sec')
const start = $('#start')
const end = $('#end')

var startTimer=null;
function timer(){
    if (hour.value==0&&minute.value==0&&sec.value==0){
        hour.value=0;
        minute.value=0;
        sec.value=0
    }
    else if (sec.value!=0){
        sec.value--;
    }
    else if( minute.value!=0 && sec.value==0){
        minute.value--;
        sec.value=59;
    }
    else if(minute.value==0&&hour.value!=0&&sec.value==0){
        hour.value--;
        minute.value=59;
        sec.value=59;
    }
    
}
function stopTimer(){
    clearInterval(startTimer)
}
start.addEventListener('click',function(){
    function startInterval(){
        startTimer = setInterval(
            function() {timer()},1000
        )
    }
    startInterval()
})
end.addEventListener('click',function(){
    stopTimer()
    hour.value=0;
    minute.value=0;
    sec.value=0
})
//todolist
const enterList = $('#enterlist')
const btnList = $('#btn-enterlist')
let tasks =getTaskFromStorage()
renderList(tasks)
//  lắng nghe click
btnList.addEventListener('click', function(e){
    
    e.preventDefault()
    if(!enterList.value){
        
        alert('Please enter note')
        return false
    }
    //  lắng nghe sửa task
    let task = {name: enterList.value}
    let taskId = this.getAttribute('index')
    let tasks =getTaskFromStorage();
    if (taskId == 0 || taskId) {
        tasks[taskId]=task
        this.removeAttribute('index')
    }
    else {
        tasks.push(task)
    }
    
    enterList.value=''
    localStorage.setItem('tasks', JSON.stringify(tasks))
    renderList(tasks)
    
})

    
function renderList(tasks=[]){
    content='<div>'
    tasks.forEach(function(task,index){
        
        return content+= `
        <div class="task">
            <div class="content">
                <input
                    type="text"
                    value="${task.name}"
                    class="text"
                    readonly
                    />
                </div>
                <div class="actions">
                    <button class="edit" onclick=editTask(${index})><i class="fa-solid fa-pen-to-square"></i></button>
                    <button class="delete" onclick=deleteTask(${index})><i class="fa-solid fa-trash-can"></i></button>
                </div>
        
                </div>
        `
                                 
    })
    content+= '</div>'
    $('#tasks').innerHTML=content
    
}


function getTaskFromStorage(){
    return localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
}
    
function editTask(index){
    let tasks =getTaskFromStorage()
    if (tasks.length>0){
        enterList.value = tasks[index].name
        btnList.setAttribute('index',index)
    }
}
function deleteTask(index){
    if (confirm("Do you want to delete?")){
        let tasks = getTaskFromStorage()
        tasks.splice(index,1)
        localStorage.setItem('tasks', JSON.stringify(tasks))
        renderList(getTaskFromStorage())   }

}