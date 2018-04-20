// Horloge
setInterval(function () {
var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

if (hours >= 24) {
hours = -24;
}

if (seconds < 10) {
  seconds = "0" + seconds;
}
if (minutes < 10) {
    minutes = "0" + minutes;
}
var clockTime = hours + ":" + minutes + ":" + seconds;


var clock = document.getElementById('clock');
clock.innerText = clockTime;
}, 1000);



// todolist
function get_todos() {
  var todos = new Array;
  var todos_str = localStorage.getItem('todo');
  if (todos_str !== null) {
    todos = JSON.parse(todos_str);
  }
  return todos;
}

function add() {
  var task = document.getElementById('task').value;

  var todos = get_todos();
  todos.push(task);
  localStorage.setItem('todo', JSON.stringify(todos));

  show();

  return false;
}

function clearDefault(a) {
  if (a.defaultValue==a.value) {a.value=""}
};

function remove() {
  var id = this.getAttribute('id');
  var todos = get_todos();
  todos.splice(id, 1);
  localStorage.setItem('todo', JSON.stringify(todos));

  show();

  return false;
}

function show() {
  var todos = get_todos();

  var html = '<ul>';
  for (var i=0; i <todos.length; i++) {
    html += '<li>' + todos[i] + '<button class="remove" id"' + i + '">Supprimer</button> </li>';
  };
  html += '</ul>';

  document.getElementById('todos').innerHTML = html;

  var buttons = document.getElementsByClassName('remove');
  for (var i=0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', remove);
  };
}

document.getElementById('add').addEventListener('click', add);
show();




// Formulaire de contact
$(document).ready(function () {
  function init() {
    if (localStorage["name"]) {
      $('#name').val(localStorage["name"]);
    }
    if (localStorage["email"]) {
      $('#email').val(localStorage["email"]);
  }
  if (localStorage["message"]) {
    $('#message').val(localStorage["message"]);
  }
}
init();
});

$('.stored').change(function () {
  localStorage[$(this).attr('name')] = $(this).val();
});




 // Compteur longueur mot
var print = function(msg) {

  document.getElementById("output").innerHTML = "Length is " + msg;

}

document.getElementById("btn").onclick = function(event){

  print(document.getElementById('str').value.length);
}
