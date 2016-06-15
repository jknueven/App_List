$(document).ready(function() {

function toDoItem(content,active){
  this.content = content;
  this.active = active;
}

$("body").on('click','.check', function(){
	var unClick = $(this).parent().find('p').text();

	todo.forEach(function(todo,index){
		if(todo.content === unClick && todo.active === false)
		{
			todo.active = true;
		}
		else if(todo.content === unClick && todo.active === true)
		{
			todo.active = false;
		}
	});
	writeTodos();
});

$("body").on('click','.delete', function(){

	var content = $(this).parent().find('p').text();	

	todo.forEach(function(aToDo,index){
		if ( content === aToDo.content)
		{
			todo.splice(index,1);
		}
	});
	writeTodos();
})

var todo = [];

$('form').on('submit',function(event){
	event.preventDefault();
	var content = $(".new-todo").val();
	var newTodo = new toDoItem(content,false);
  	todo.push(newTodo);
  	writeTodos();
  	$(".new-todo").val("");
})

$('.show-all').on('click', function(){
	writeTodos();
	buttonActive(this);
});

$('.show-active').on('click',function(){
	writeActiveTodos();
	buttonActive(this);
});

$('.show-completed').on('click', function(){
	writeCompleteTodos();
	buttonActive(this);
});


function buttonActive(button){
	$('nav button').removeClass('active');
	$(button).addClass('active');
}

function writeTodos()
{
  var items = $(".items");
  items.html("");
  todo.forEach(function(todo)
  {
  	if(todo.active === false)
  	{
  		items.append("<li><article><button class='check'></button><p>"+todo.content+"</p><input type='text' class='edit-todo' value='learn html'><button class='delete'>X</button></article></li>");
  	}
  	else{
  		items.append("<li><article class='completed'><button class='check'></button><p class='complete'>"+todo.content+"</p><input type='text' class='edit-todo' value='learn css'><button class='delete'>X</button></article></li>");
  	}
  });
}

function writeActiveTodos()
{
  var items = $(".items");
  items.html("");
  todo.forEach(function(todo)
  {
  	if(todo.active === false)
  	{
  		items.append("<li><article><button class='check'></button><p>"+todo.content+"</p><input type='text' class='edit-todo' value='learn html'><button class='delete'>X</button></article></li>");
  	}
  });
}

function writeCompleteTodos()
{
  var items = $(".items");
  items.html("");
  todo.forEach(function(todo)
  {
  	if(todo.active === true)
  	{
		items.append("<li><article class='completed'><button class='check'></button><p class='complete'>"+todo.content+"</p><input type='text' class='edit-todo' value='learn css'><button class='delete'>X</button></article></li>");  	}
  });
}

});