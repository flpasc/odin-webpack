import { openingHours } from "./openingHours";

export const home = () => {
	const content = document.getElementById("main");
	content.innerHTML = "";

	const header = document.createElement("h1");
	header.textContent = "Nico Nagger Nuts";
	header.id = "restaurantName";

	const welcomeText = document.createElement("p");
	welcomeText.id = "welcome";
	welcomeText.textContent =
		"Curabitur penatibus facilisi sed phasellus duis rhoncus finibus nibh taciti euismod, sollicitudin accumsan id odio tristique maecenas risus convallis class. Odio taciti habitant faucibus mattis fusce eros integer, malesuada etiam litora sodales fringilla et. Lectus ligula cursus lobortis dictum scelerisque per lacus,mauris magna et molestie elit.";

	const location = document.createElement("p");

	content.appendChild(header);
	content.appendChild(welcomeText);
	content.appendChild(openingHours());
};
