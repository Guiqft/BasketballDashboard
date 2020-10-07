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
	display: flex;
	flex: 1;
	flex-direction: row;
	align-items: center;
	margin-top: 1%;
}
</style>
