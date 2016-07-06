	var Main_Dish = ["Meat Loaf", "Steak", "Lau Lau", "Shoyu Chicken", 
"Grilled Salmon", "Shrimp Scampi" , "Kalua Pig"];

var Side_Dish = ["Rice", "Mash Potato", "Salad", "Grilled Veggies", 
"Poi", "Lomi Salmon", "Creamed Spinach", "Mac Salad", "Steamed Veggies"];


function pickTopping(){
	var Main_index = Math.floor(Math.random()*Main_Dish.length);
	var Side_index = Math.floor(Math.random()*Side_Dish.length);
	document.getElementById('MondayMain').innerHTML = Main_Dish[Main_index];
	document.getElementById('MondaySide').innerHTML = Side_Dish[Side_index];

	var Main_index = Math.floor(Math.random()*Main_Dish.length);
	var Side_index = Math.floor(Math.random()*Side_Dish.length);
	document.getElementById('TuesdayMain').innerHTML = Main_Dish[Main_index];
	document.getElementById('TuesdaySide').innerHTML = Side_Dish[Side_index];

	var Main_index = Math.floor(Math.random()*Main_Dish.length);
	var Side_index = Math.floor(Math.random()*Side_Dish.length);
	document.getElementById('WednesdayMain').innerHTML = Main_Dish[Main_index];
	document.getElementById('WednesdaySide').innerHTML = Side_Dish[Side_index];

	var Main_index = Math.floor(Math.random()*Main_Dish.length);
	var Side_index = Math.floor(Math.random()*Side_Dish.length);
	document.getElementById('ThursdayMain').innerHTML = Main_Dish[Main_index];
	document.getElementById('ThursdaySide').innerHTML = Side_Dish[Side_index];

	var Main_index = Math.floor(Math.random()*Main_Dish.length);
	var Side_index = Math.floor(Math.random()*Side_Dish.length);
	document.getElementById('FridayMain').innerHTML = Main_Dish[Main_index];
	document.getElementById('FridaySide').innerHTML = Side_Dish[Side_index];
}

