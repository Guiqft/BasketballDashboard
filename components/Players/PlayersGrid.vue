<template>
  <div class="grid-container">
      <PlayerCard v-for="(player, idx) in players" :key="idx" :player="player"/>
  </div>
</template>

<script>
export default {
    name: 'PlayersGrid',
    props: {
        players: {type: Object, default: {}}
    }
}
</script>

<style scoped>
.grid-container{
    display: grid;
    flex: 1;
    grid-column-gap: 24px;
    grid-row-gap: 24px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	transform: skew(10deg);
}
</style>