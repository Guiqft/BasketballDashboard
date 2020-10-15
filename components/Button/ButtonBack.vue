<template>
    <a class="back-button" @click="$router.go(-1)">
        <ArrowLeft height="4vh" width="4vh" stroke-width="5"/>
        <div class="title">
            Voltar
        </div>
    </a>
  
</template>

<script>
import ArrowLeft from '@/static/arrow-left.svg?inline'

export default {
    name: 'ButtonBack',
    components: {
        ArrowLeft
    },
}
</script>

<style scoped>
.back-button{
    display: flex;
    align-items: center;
    cursor: pointer;
}

.title{
    font-weight: 700;
    font-size: 2vh;
    margin-left: 2%;
}
</style>