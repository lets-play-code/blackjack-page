<template>
  <div id="app">
    <Game/>
    <h4><a @click="taggleHello">Hello</a></h4>
    <div v-if="showHello">
      <img alt="Vue logo" src="./assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Game from './components/Game.vue'
export default {
  name: 'app',
  components: {
    Game,
    HelloWorld
  },
  data () {
    return { showHello : false };
  },
  methods: {
    taggleHello () {
      this.showHello = !this.showHello;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
