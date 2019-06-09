<template>
    <span class='card' v-bind:class='{red: isRedCard}' v-html='unicode'/>
</template>

<script>
const CARD_HEAD = '&#x1F0'
export default {
    name: 'Card',
    props: {
        code: String
    },
    computed: {
        unicode () {
            return (this.code === '') ? '' : CARD_HEAD + this.code;
        },
        isRedCard () {
            return this.code.match('^[BC]');
        }
    }
}
</script>

<style scoped>
    .red {
        color: red
    }
    .card {
        font-size: 90pt
    }
</style>
