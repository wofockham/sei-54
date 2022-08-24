<template>
    <div>
        <h2>{{ name }}</h2>
        <h3>{{ bio }}</h3>
        <div>
            <button @click="zoomIn">+</button>
            <button @click="zoomOut">-</button>
        </div>
        <img v-if="size > 0" :src="pic" :height="size">
    </div>
</template>

<script>
export default {
    name: 'SocialProfile',
    props: {
        name: String, 
        bio: String,
        pic: String
    },
    data: function () {
        return {
            size: 100
        };
    },
    methods: {
        zoomIn: function () {
            this.size += 10;
        },
        zoomOut: function () {
            this.size -= 10;
        }
    }
};
</script>

<style>

</style>