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
