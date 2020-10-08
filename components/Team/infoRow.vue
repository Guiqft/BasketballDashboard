<template>
	<div class="infoRow">
		<div class="infoTitle">{{ `${title}:` }}</div>
		<div class="infoValue" :style="`color: ${color}`">
			{{ value }}
		</div>
	</div>
</template>

<script>
export default {
	name: "infoRow",
	props: {
		title: { type: String, default: "" },
		value: { type: String, default: "" },
		color: { type: String, default: "" }
	}
};
</script>

<style scoped>
.infoRow {
	display: flex;
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 2%;
}

.infoTitle {
	font-weight: 500;
	font-size: 0.75rem;
	color: #4f4e4c;
}

.infoValue {
	font-weight: 700;
	font-size: 0.9rem;
	filter: brightness(50%);
}
</style>
