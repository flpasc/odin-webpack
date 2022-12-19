import { Dish } from "./dish";
import Almonds from "./img/almonds.jpeg";
import Cashew from "./img/cashew.jpeg";
import Hazelnut from "./img/hazelnut.jpeg";
import Walnut from "./img/walnut.jpeg";

export const menu = () => {
	const content = document.getElementById("main");
	content.innerHTML = "";

	const header = document.createElement("h1");
	header.textContent = "Menu";
	header.id = "menue";

	const dishList = document.createElement("div");
	dishList.id = "dish-list";

	dishes.forEach((dish) => {
		const meal = document.createElement("div");
		meal.id = "meal";

		const mealImg = document.createElement("img");
		mealImg.src = dish.img;

		const mealName = document.createElement("div");
		mealName.id = "meal-name";
		mealName.textContent = dish.name;

		const mealDescription = document.createElement("div");
		mealDescription.id = "meal-description";
		mealDescription.textContent = dish.description;

		const mealPrice = document.createElement("div");
		mealPrice.id = "meal-price";
		mealPrice.textContent = dish.price;

		meal.appendChild(mealImg);
		meal.appendChild(mealName);
		meal.appendChild(mealDescription);
		meal.appendChild(mealPrice);

		dishList.appendChild(meal);
	});

	content.appendChild(header);
	content.appendChild(dishList);
};

const dishes = [];

const meal1 = new Dish("Walnut", "very waaaallliee", Walnut, "3 $");
const meal2 = new Dish("Hazelnut", "very waaaallliee", Hazelnut, "4 $");
const meal3 = new Dish("Cashew", "very waaaallliee", Cashew, "7 $");
const meal4 = new Dish("Almonds", "very waaaallliee", Almonds, "6 $");
const meal5 = new Dish("Walnut", "very waaaallliee", Walnut, "3 $");
const meal6 = new Dish("Hazelnut", "very waaaallliee", Hazelnut, "4 $");
const meal7 = new Dish("Cashew", "very waaaallliee", Cashew, "7 $");
const meal8 = new Dish("Almonds", "very waaaallliee", Almonds, "6 $");

dishes.push(meal1);
dishes.push(meal2);
dishes.push(meal3);
dishes.push(meal4);
dishes.push(meal5);
dishes.push(meal6);
dishes.push(meal7);
dishes.push(meal8);
