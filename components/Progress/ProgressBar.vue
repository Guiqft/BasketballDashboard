<template>
  <div class="bar-container">
    <div class="title">{{title.replace('_', ' ')}}</div>
    <k-progress 
      active 
      :percent="(Number(value) / Number(max)) * 100"
      :color="[colors.secondary_color, colors.primary_color]" 
      bg-color="#e6e6e6" 
      :format="format"
      class="bar"
    />
  </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: {
      title: {type: String, default: 'title'},
      value: {type: String, default: '70'},
      max: {type: String, default: '100'},
		  colors: { type: Object, default: {} }
    },
    methods: {
      format(percent){
        return `${percent.toFixed(2)}%`
      }
    }
}
</script>

<style scoped>
.bar-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    width: 100%;
}

.title {
  font-weight: 600;
  font-size: 2vh;
  color: white;
  text-transform: capitalize;
}

.bar {
    width: 100%;
}
</style>