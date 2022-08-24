<template>
    <button @click="incrementCount">
        {{ clicks }} so far
    </button>    
</template>

<script>
export default {
    name: 'ClickrButton',
    data: function () {
        return {
            clicks: 0
        };
    },
    methods: {
        incrementCount: function () {
            this.clicks++;
        }
    }
};
</script>

<style scoped>
button {
    background-color: pink;
    box-shadow: 0 0 25px limegreen;
}
</style>
