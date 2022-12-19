export const footer = () => {
	const footer = document.getElementById("footer");

	const list = document.createElement("ul");
	const text1 = document.createElement("li");
	text1.textContent = "Made by Flpasch";

	const text2 = document.createElement("li");
	text2.textContent = "following the Odin-Project";

	const text3 = document.createElement("li");
	text3.textContent = "2022";

	list.appendChild(text1);
	list.appendChild(text2);
	list.appendChild(text3);

	footer.appendChild(list);
};
