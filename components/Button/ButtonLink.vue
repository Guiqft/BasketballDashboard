<template>
  <nuxt-link class="button-container" :style="`width: ${width}`" :to="to" style="text-decoration: none!important;">
        <Button :title="title" :width="width">
            <ArrowRight width="2vh" height="2vh"/>
        </Button>
  </nuxt-link>
</template>

<script>
import ArrowRight from '@/static/arrow-right.svg?inline'

export default {
    name: 'ButtonLink',
	components: {
		ArrowRight
	},
    props: {
        title: {type: String, default: 'title'},
        width: {type: String, defualt: '100%'},
        to: {type: String, defualt: '/'}
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