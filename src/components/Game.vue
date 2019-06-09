<template>
    <div>
        <h1> Start Play Black Jack </h1>
        <button v-on:click='getCards'>Start</button>
        <p><Card v-bind:code='cards'/></p>
    </div>
</template>

<script>
const CARD = 'card'
import Card from './Card.vue'
export default {
    name: 'Game',
    components: {
        Card
    },
    data () {
        return {
            cards: ''
        }
    },
    methods: {
        getCards () {
            this.$http.get(CARD).then(response => {
                this.cards = response.bodyText
            }, error => {
                error
            });
        }
    }
}
</script>