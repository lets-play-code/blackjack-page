<template>
    <div>
        <h1> Start Play Black Jack </h1>
        <button v-on:click='getCards'>Start</button>
        <p><span class='card' v-html='cards'/></p>
    </div>
</template>

<script>
const SERVER = 'http://localhost:8080'
const CARD = '/card'
const CARD_HEAD = '&#x1F0'
export default {
    name: 'Game',
    data () {
        return {
            cards: ''
        }
    },
    methods: {
        getCards () {
            let url = SERVER + CARD;
            this.$http.get(url).then(response => {
                this.cards = CARD_HEAD + response.bodyText
            }, error => {
                error
            });
        }
    }
}
</script>
<style <style scoped>
    .card {
        font-size: 90pt
    }

</style>

