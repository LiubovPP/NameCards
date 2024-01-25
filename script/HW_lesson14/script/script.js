const formNode = document.querySelector ('#addForm');

const cards =[];

formNode.addEventListener ("submit", (event)=> {
    event.preventDefault();// отменяет поведение по умолчанию (отправка HTTP запроса)
    const {firstName, secondName, age} =event.target;
    const card = {
    firstName:firstName.value, 
    secondName:secondName.value, 
    age: age.value};
    cards.push (card);
    rerender();
    event.target.reset(); // очистка формы 
})

function createUserCard (firstName, secondName, age){
    const container = document.createElement("div");
    const firstNameNode = document.createElement("p"); 
    const secondNameNode = document.createElement("p"); 
    const ageNode = document.createElement("p"); 

    firstNameNode.innerText = firstName;
    secondNameNode.innerText= secondName;
    ageNode.innerText = age;
    container.append (firstNameNode, secondNameNode, ageNode);
    return container;
}

function rerender (){
    const container = document.querySelector ('#userCardsContainer');
    container.innerText = '';
    cards.forEach (({firstName, secondName, age})=> container.append(createUserCard(firstName, secondName, age)))
}
