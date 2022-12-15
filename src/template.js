export const template = () => {
	const content = document.getElementById("content");

	const header = document.createElement("div");
	header.classList = "header";

	const navBar = document.createElement("div");
	navBar.classList = "nav-bar";

	const main = document.createElement("div");
	main.classList = "main";
	main.id = "main";

	const footer = document.createElement("div");
	footer.classList = "footer";

	const btnHome = document.createElement("button");
	btnHome.id = "btn-home";
	btnHome.innerHTML = "HOME";

	const btnMenu = document.createElement("button");
	btnMenu.id = "btn-menu";
	btnMenu.innerHTML = "MENU";

	const btnContact = document.createElement("button");
	btnContact.id = "btn-contact";
	btnContact.innerHTML = "CONTACT";

	navBar.appendChild(btnHome);
	navBar.appendChild(btnMenu);
	navBar.appendChild(btnContact);

	content.appendChild(header);
	content.appendChild(navBar);
	content.appendChild(main);
	content.appendChild(footer);
};
