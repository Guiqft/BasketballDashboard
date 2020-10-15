<template>
	<div class="container">
		<ArrowLeft class="logo" :fill="colors.primary_color"/>
	</div>
</template>

<script>
import ArrowLeft from '@/static/logo.svg?inline'

export default {
	name: 'Logo',
	components: {
		ArrowLeft
	},
	computed: {
		colors(){
			return this.$store.state.selectedTeamColors
		}
	}

};
</script>

<style scoped>
.container {
	flex: 1;
}

.logo {
	height: 5vh;
}
</style>
