<template>
	<div class="container">
		<Logo class="logo"/>
		<SearchBar class="search-bar"/>
	</div>
</template>

<script>
export default {
	name: "Header"
};
</script>

<style scoped>
.container {
	position: relative;
	display: flex;
	max-height: 19.7vh;
	flex: 1;
	flex-direction: row;
	align-items: center;
}

.logo{
	flex: 1;
	margin-left: 7%;
}

.search-bar{
	flex: 1;
	margin-right: 5%;
}
</style>
