<template>
    <div>
        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="germany flag" /> German
            </div>
            <input type="text" readonly :value="word.german">
        </div>
        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="united kingdom flag" /> English
            </div>
            <input type="text" readonly :value="word.english">
        </div>
        <div class="actions">
            <router-link :to="{ name: 'edit', params: { id: this.$route.params.id } }">
                Edit word
            </router-link>
        </div>
    </div>
</template>

<script>
import { api } from '../helpers/helpers';

export default {
    name: 'show',
    data() {
        return {
            word: {}
        };
    },
    async mounted() {
        this.word = await api.getWord( this.$route.params.id );
    }
};
</script>

<style scoped>
.actions a {
   display: block;
   text-decoration: underline;
   margin: 20px 10px; 
}
</style>