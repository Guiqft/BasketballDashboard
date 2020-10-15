export const resetStyle = team => {
	const olderTeamContainer = document.getElementsByClassName(
		`container_${team.name}`
	)[0];

	const olderTeamLogo = document.getElementsByClassName(
		`logoContainer_${team.name}`
	)[0];

	const olderTeamContent = document.getElementsByClassName(
		`content_${team.name}`
	)[0];

	olderTeamContainer.style.zIndex = 1;
	olderTeamLogo.style.boxShadow = "0px 0px 4px 1px rgba(0, 0, 0, 0.75)";
	olderTeamContent.style.boxShadow = "0px 0px 4px 1px rgba(0, 0, 0, 0.75)";
};

export const highlightStyle = team => {
	const selectedTeamContainer = document.getElementsByClassName(
		`container_${team.name}`
	)[0];

	const selectedTeamLogo = document.getElementsByClassName(
		`logoContainer_${team.name}`
	)[0];

	const selectedTeamContent = document.getElementsByClassName(
		`content_${team.name}`
	)[0];

	selectedTeamContainer.style.zIndex = 10;
	selectedTeamLogo.style.boxShadow = `0px 0px 5px 4px #${team.primary_color}`;
	selectedTeamContent.style.boxShadow = `0px 0px 5px 4px #${team.primary_color}`;
};

export const formatColor = color => {
	if (color !== null) {
		return color.replace(/^/, "#");
	} else return "white";
};
