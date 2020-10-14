<template>
  <div class="button-container" :style="`width: ${width}`">
        <v-btn class="button" elevation="1" block >
            <div class="title">{{title}}</div>
 
            <slot class="child"/>
        </v-btn>
  </div>
</template>

<script>
export default {
    name: 'Button',
    props: {
        title: {type: String, default: 'title'},
        width: {type: String, defualt: '100%'}
    }
}
</script>

<style scoped>
.button {
    display: flex;
    flex: 1;
}

.title{
    flex: 3;
    width: 80%;
    font-weight: 500;
}

.child {
    flex: 1;
    width: 100%;
}
</style>