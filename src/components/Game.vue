<template>
    <div>
        <h1> Start Play Black Jack </h1>
        <button v-on:click='getCards'>Start</button>
        <p>Host: </p>
        <p><Card v-for="card in game.host" v-bind:code='card'/></p>
        <p>Player: </p>
        <p><Card v-for="card in game.player" v-bind:code='card'/></p>
    </div>
</template>

<script>
const START_GAME = 'startgame'
import Card from './Card.vue'
export default {
    name: 'Game',
    components: {
        Card
    },
    data () {
        return {
            game: ''
        }
    },
    methods: {
        getCards () {
            this.$http.post(START_GAME).then(response => {
                this.game = response.data
            }, error => {
                error
            });
        }
    }
}
</script>