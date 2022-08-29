<template>
    <div>
        <h1>New Word</h1>
        <word-form @createOrUpdate="createOrUpdate"></word-form>
    </div>
</template>

<script>
import WordForm from '../components/WordForm.vue';
import { api } from '../helpers/helpers';

export default {
    name: 'new-word',
    components: {
        'word-form': WordForm
    },
    methods: {
        createOrUpdate: async function (word) {
            const res = await api.createWord(word);
            alert('Word created!'); // todo: replace this with vue-flash-message
            this.$router.push(`/words/${ res._id }`);
        }
    }
}
</script>

<style>
</style>