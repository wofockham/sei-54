<template>
    <div>
        <h2>Fancy Calculator</h2>
        <div v-if="a && b">
            <h3>Results</h3>
            <p>{{ a }} + {{ b }} = {{ a + b }}</p>
            <p>{{ a }} - {{ b }} = {{ a - b }}</p>
            <p>{{ a }} * {{ b }} = {{ a * b }}</p>
            <p>{{ a }} / {{ b }} = {{ a / b }}</p>
        </div>
        <input v-model.number="a" />
        <input v-model.number="b" />
    </div>
</template>

<script>
export default {
    name: 'FancyCalculator',
    data: function () {
        return {
            a: null,
            b: null
        };
    }
}
</script>

<style>
</style>