let newName = prompt('Как Вас зовут ?');

if (newName == 'Иван') {
    alert('Привет Иван!')
} else {
    alert("Привет друг!")
} 

let newage = prompt("Введите возраст")

if  (newage < 18) {
    alert("Вам вход запрещен")
} else if  (newage > 18) {
    alert("Добро пожаловать")
} 