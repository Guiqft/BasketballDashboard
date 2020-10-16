<template>
    <div class="legend-container">
        <div class="color" :style="`background-color: ${color}`"/>
        <div class="text" :style="`color: ${textColor}`">
            {{title}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ChartLegend',
    props: {
        title: {type: String, default: 'Legend'},
        color: {type: String, default: 'white'},
        textColor: {type: String, default: 'white'}
    }
}
</script>

<style scoped>
.legend-container{
    display: flex;
    align-items: center;
    width: 100%;
    margin-top: 5%;
}

.color {
    width: 1.6vh;
    height: 1.6vh;
    border-radius: 100%;
    margin-right: 10%;
    border: 1px solid rgb(173, 167, 167)
}

.text {
    font-weight: 600;
    font-size: 1.4vh;
    color: white;
}
</style>