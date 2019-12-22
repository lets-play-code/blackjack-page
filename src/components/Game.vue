<template>
    <div>
        <h1> Start Play Black Jack </h1>
        <button v-on:click='getCards'>Start</button>
        <button v-on:click='deal'>Deal</button>
        <button v-on:click='closeDeal'>CloseDeal</button>
        <h1 v-if="this.result">  WINNER : {{ this.result.host.winner ? 'HOST' : 'PLAYER'}}</h1>
        <p>Host: </p>
        <p><Card v-for="card in game.host.cards" :key='card' :code='card'/></p>
        <p>Player: </p>
        <p><Card v-for="card in game.player.cards" :key='card' :code='card'/></p>
    </div>
</template>

<script>
const START_GAME = 'startgame'
const DEAL = 'deal'
const CLOSE_DEAL = 'closedeal'
import Card from './Card.vue'
export default {
    name: 'Game',
    components: {
        Card
    },
    data () {
        return {
            game: {host:[], player:[]},
            result: null
        }
    },
    methods: {
        getCards () {
            this.result = null
            this.$http.post(START_GAME).then(response => {
                this.game = response.data
            }, error => {
                error
            });
        },
        deal() {
            this.$http.post(DEAL).then(response => {
                this.game = response.data
            }, error => {
                error
            })
        },
        closeDeal () {
            this.$http.post(CLOSE_DEAL).then(response => {
                this.result = response.data
            }, error => {
                error
            });
        }
    }
}
</script>