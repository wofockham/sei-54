<template>
    <div>
        <h1>Experiments</h1>

        <ClickrButton />

        <hr />

        <SocialProfile name="Groucho" bio="No gods no masters" pic="http://www.fillmurray.com/400/600" />
        <SocialProfile name="Harpo" bio="No gods no masters" pic="http://www.fillmurray.com/401/600" />
        <SocialProfile name="Chico" bio="No gods no masters" pic="http://www.fillmurray.com/400/601" />

        <hr />

        <FancyCalculator />

    </div>
</template>

<script>
// @ is a shortcut for `src`
import ClickrButton from '@/components/ClickrButton.vue';
import SocialProfile from '@/components/SocialProfile.vue';
import FancyCalculator from '@/components/FancyCalculator.vue';
export default {
    name: 'ExperimentsView',
    components: {
        ClickrButton: ClickrButton,
        SocialProfile: SocialProfile,
        FancyCalculator: FancyCalculator
    }
};
</script>

<style>
</style>
