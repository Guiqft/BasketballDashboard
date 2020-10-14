<template>
	<div class="container">
		<Logo />
		<SearchBar />
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
</style>
