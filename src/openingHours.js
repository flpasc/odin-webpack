export const openingHours = () => {
	const weekdays = "8 - 22";
	const weekend = "10 - 18";

	const lineBreak = document.createElement("br");
	let table = document.createElement("div");
	table.id = "opening-hours";
	table.textContent = `Monday: ${weekdays}`;
	table.appendChild(lineBreak);
	table.innerHTML += `Tuesday: ${weekdays}`;
	table.appendChild(lineBreak);
	table.innerHTML += `Wednesday: ${weekdays}`;
	table.appendChild(lineBreak);
	table.innerHTML += `Thursday: ${weekdays}`;
	table.appendChild(lineBreak);
	table.innerHTML += `Friday: ${weekdays}`;
	table.appendChild(lineBreak);
	table.innerHTML += `Saturday: ${weekdays}`;
	table.appendChild(lineBreak);
	table.innerHTML += `Sunday: ${weekdays}`;
	table.appendChild(lineBreak);

	return table;
};
