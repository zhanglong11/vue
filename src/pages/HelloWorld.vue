<template>
    <div class="hello">
        <span>{{this.$store.state.name}}</span>
        <Button :addFun="addFun"/>
    </div>
</template>

<script>
    import Button from '../components/Button'

    export default {
        name: 'HelloWorld',
        components: {Button},
        methods:{
            addFun(){
                alert(1)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
