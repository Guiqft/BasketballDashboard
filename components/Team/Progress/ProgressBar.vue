<template>
  <div class="bar-container">
    <k-progress :percent="70" :color="['#40a9ff', '#5cdbd3']" bg-color="#d9f7be" class="bar"/>
  </div>
</template>

<script>
export default {
    name: 'ProgressBar'
}
</script>

<style scoped>
.bar-container {
    display: flex;
    flex: 1;
    width: 100%;
}
.bar {
    width: 100%;
}
</style>