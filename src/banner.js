export const banner = () => {
	const advertisement = "+++ 50% +++ NUTS DAYY +++";
	const header = document.getElementById("header");
	const list = document.createElement("ul");

	for (let i = 0; i < 4; i++) {
		const ad = document.createElement("li");
		ad.textContent = advertisement;
		list.appendChild(ad);
	}
	header.appendChild(list);
};
