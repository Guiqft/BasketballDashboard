<template>
	<div class="container">
		<Logo />
		<SearchBar />
		<Menu />
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
	height: 19.7vh;
	flex: 1;
	flex-direction: row;
	align-items: center;
	margin-top: 0%;
}
</style>
