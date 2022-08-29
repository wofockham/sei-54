<template>
    <form action="#" @submit.prevent="onSubmit">
        <p v-if="errorsPresent" class="error">Please fill out both fields</p>

        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="germany flag" /> German
            </div>
            <input type="text" placeholder="Enter German word..." v-model="word.german" />
        </div>

        <div class="ui labeled input fluid">
            <div class="ui label">
                <i class="united kingdom flag" /> English
            </div>
            <input type="text" placeholder="Enter English word..." v-model="word.english" />
        </div>

        <button class="positive ui button">Submit</button>
    </form>    
</template>

<script>
export default {
    name: 'word-form',
    props: {
        word: {
            type: Object,
            required: false,
            default: function () {
                return {
                    english: '',
                    german: ''
                };
            }
        }
    },
    data() {
        return {
            errorsPresent: false
        }
    },
    methods: {
        onSubmit: function () {
            if (this.word.english === '' || this.word.german === '') {
                this.errorsPresent = true;
            } else {
                this.$emit('createOrUpdate', this.word);
            }
        }
    }
}
</script>

<style scoped>
.error {
    color: red;
}
</style>