<template>
  <div class="button-container" :style="`width: ${width}`">
        <v-btn class="button" elevation="1" block >
            {{title}}
            <slot>

            </slot>
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

</style>