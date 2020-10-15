<template>
  <div class="card-container">
      <div class="card-content">
        {{player.first_name}}
      </div>
  </div>
</template>

<script>
export default {
    name: 'PlayerCard',
    props: {
        player: {type: Object, default: {}}
    }
}
</script>

<style scoped>
.card-container{
    display: flex;
    color: white;
    background-color: blue;
    height: 30vh;
    margin-bottom: 1%;
}

.card-content{
	transform: skew(-10deg);
}
</style>