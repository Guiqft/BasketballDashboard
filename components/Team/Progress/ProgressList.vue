<template>
    <div class="list-container">
        <ProgressBar v-for="(label, idx) in labels" :key="idx" :title="label" :value="values.mades[idx]" :max="values.attempteds[idx]" class="bar"/>
    </div>
</template>

<script>
export default {
    name: 'ProgressList',
    computed: {
        labels(){
            return ['field_goals', 'two_pointers', 'three_pointers', 'free_throws']
        },
        values(){
            const teamStats = this.$store.state.selectedTeamStats

            const mades = []
            const attempteds = []

            this.labels.map(el => {
                mades.push(teamStats[`${el}_made`])
            })

            this.labels.map(el => {
                attempteds.push(teamStats[`${el}_attempted`])
            })

            return {mades, attempteds}
        }
    }
}
</script>

<style scoped>
.list-container {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.bar {
    margin-bottom: 3%;
}
</style>