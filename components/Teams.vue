<template>
	<div>
		<p>{{ id }}</p>
	</div>
</template>

<script lang="ts">
export default {
	name: "Teams",

	props: {
		id: { type: Number, default: "" }
	}
};
</script>

<style></style>
