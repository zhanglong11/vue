<template>
    <div class="btn-primary" @click='add'>添加</div>
</template>

<script>
    export default {
        name: "Button",
        props: {
            addFun:{
                type:Function,
                default: null
            }
        },
        methods:{
            add(){
                if(this.addFun)
                    this.addFun();
            }
        }
    }
</script>

<style scoped>
    .btn-primary {
        width: 100px;
        height: 40px;
        justify-content: center;
        align-content: center;
        color: red
    }
</style>