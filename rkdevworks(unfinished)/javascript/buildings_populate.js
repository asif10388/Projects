var url_string = window.location.href;
var url = new URL(url_string);
var building_id = url.searchParams.get("id");
var letters = ['a', 'b', 'c', 'd', 'e', 'f'];

const buildings = buildings_data;

if (building_id && buildings[building_id]) {
	const building = buildings[building_id];

	var oops_text = document.getElementById("oops");
	oops_text.parentNode.removeChild(oops_text);

	var page = document.getElementById("building_placeholder");
	page.style.display = "block";

	var name = document.getElementById("b_name");
	var desc = document.getElementById("desc");
	var feat = document.getElementById("feat");
	var unit_btn = document.getElementById("nav-unit-a");
	var unit_tab = document.getElementById("nav-unit-a-tab");

	name.innerHTML = building.name;
	desc.innerHTML = building.desc;

	for (i = 0; i < building.features.length; i++) {
		var cloneFeat = feat.cloneNode(false);
		feat.parentNode.appendChild(cloneFeat);
		cloneFeat.innerHTML = building.features[i];
	}

	for (i = 0; i < building.units.length; i++) {
		unit_tab.firstElementChild.setAttribute("src", building.units[i]);

		var cloneUnitBtn = unit_btn.cloneNode(true);
		var cloneUnitTab = unit_tab.cloneNode(true);

		unit_btn.parentNode.appendChild(cloneUnitBtn);
		unit_tab.parentNode.appendChild(cloneUnitTab);

		cloneUnitBtn.setAttribute("id", "nav-unit-" + letters[i]);
		cloneUnitBtn.setAttribute("href", "#nav-unit-" + letters[i] + "-tab");
		cloneUnitBtn.setAttribute("aria-controls", "nav-unit-" + letters[i] + "-tab");
		cloneUnitBtn.innerHTML = "Unit " + letters[i].toUpperCase();

		cloneUnitTab.setAttribute("id", "nav-unit-" + letters[i] + "-tab");
		cloneUnitTab.setAttribute("aria-labelledby", "nav-unit-" + letters[i] + "-tab");

		if (i != 0) {
			cloneUnitBtn.setAttribute("aria-selected", "false");
			cloneUnitBtn.setAttribute("class", "nav-item nav-link");

			cloneUnitTab.setAttribute("class", "tab-pane fade");
		}
	}

	unit_btn.parentNode.removeChild(unit_btn);
	unit_tab.parentNode.removeChild(unit_tab);

}