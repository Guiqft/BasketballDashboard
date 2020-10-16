<template>
	<div class="container">
		<input ref="input" v-model.trim="inputValue" class="dropdown-input" type="text" :placeholder="title" />
        <DropDownList @selected-item="resetInput" class="dropdown-list" v-show="inputValue" :lists="lists" :inputValue="inputValue"/>
    </div>
</template>

<script>
export default {
    name: "SearchBar",
    props:{
        title:{type: String, default: 'Search'},
        lists: {type: Object, default: {}}
    },
    data() {
        return{
            inputValue: ''
        }
    },
    methods:{
        resetInput(){
            this.$refs.input.value = ''
            this.inputValue = ''
        }
    }
}
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}

.dropdown-input{
    width: 100%;
    height: 4vh;
    font-size: 1.5vh;
    padding: 3%;
    border-radius: 5px;
    border: 1px solid #e6e6e6;
    background: rgb(255, 255, 255);
	background: linear-gradient(
		0deg,
		rgba(216, 212, 209, 1) 0%,
		rgba(255, 255, 255, 1) 10%,
    	rgba(255, 255, 255, 1) 100%
	);

    font-weight: 600;
    border: none!important;
}

.dropdown-input:focus{
    outline: #e6e6e6!important
}

.dropdown-list{
    position: relative;
    width: 100%;
}
</style>
