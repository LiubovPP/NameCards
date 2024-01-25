// написать скрипт, который при отправке формы выводит в терминал 
// сообщение "submited"
const formNode = document.querySelector('#addForm');
const tasks = []; // сюда запишем все дела

formNode.addEventListener ("submit", (event)=> {
event.preventDefault();// отменяет поведение по умолчанию (отправка HTTP запроса)
console.log ("submited!");

// доработать обработку отправки формы таким образом
// чтобы в консоль выводились данные из формы
// const task = event.target.task.value;
// const priority = event.target.priority.value;

const {title,priority} = event.target; // можно через деструктуризацию
// // доработать процесс таким образом, чтобы из полученных данных формировался объект, который добавляется в массив
// tasks.push ({task,priority});
// // console.log (tasks);

const todo = {
    title: title.value,
    priority: priority.value
};
tasks.push(todo);
rerender;
event.target.reset(); // очистка формы 
})



function getTodoNode (title, priority){
    const container = document.createElement("div");
    const titleNode = document.createElement("p");// 
    const priorityNode = document.createElement("p"); // p текст

    titleNode.innerText = title;
    priorityNode.innerText = priority;
    container.append (titleNode, priorityNode);
    return container;
}
  
function rerender (){
    const container = document.querySelector('#todosContainer');
    container.innerText ='';
    tasks.forEach (({title, priority})=> container.append (getTodoNode(title, priority)));
}  
   