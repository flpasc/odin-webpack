export const home = () => {
	const content = document.getElementById("main");

	const header = document.createElement("h1");
	header.textContent = "Nico Nagger Nuts";
	header.id = "restaurantName";

	const welcomeText = document.createElement("p");
	const openingHours = document.createElement("p");
	const location = document.createElement("p");

	content.appendChild(header);
};
