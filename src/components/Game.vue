<template>
    <div>
        <h1> Start Play Black Jack </h1>
        <button v-on:click='getCards'>Start</button>
        <button v-on:click='deal'>Deal</button>
        <button v-on:click='closeDeal'>CloseDeal</button>
        <h1 id="gameResult" > 
            <div v-if="this.game.host.winner || this.game.player.winner "> winner is {{ this.game.host.winner ? 'host' : 'player'}}</div>
            <div v-else>running</div>
        </h1>

        <div id="host">
        <p>Host: </p>
        <p><Card v-for="card in game.host.cards" :key='card' :code='card'/></p>
        </div>
        <div id="player">
        <p>Player: </p>
        <p id="player"><Card v-for="card in game.player.cards" :key='card' :code='card'/></p>
        </div>
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
            game: {host:[], player:[]}
        }
    },
    methods: {
        getCards () {
        
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
                this.game = response.data
            }, error => {
                error
            });
        }
    }
}
</script>