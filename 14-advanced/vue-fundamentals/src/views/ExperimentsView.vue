<template>
    <div>
        <h1>Experiments</h1>

        <ClickrButton />

        <hr />

    </div>
</template>

<script>
// @ is a shortcut for `src`
import ClickrButton from '@/components/ClickrButton.vue';
export default {
    name: 'ExperimentsView',
    components: {
        ClickrButton: ClickrButton
    }
};
</script>

<style>
</style>
