<template>
    <div>
        <label>用户名:<input type="text" v-model="username"/></label>
        <label>密码:<input type="text" v-model="password"/></label>
        <button @click="login">登录</button>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data(){
            return {
                username:'admin',
                password:'123456'
            }
        },
        methods:{
            login(){
                axios.post('/admin/bim6d-system/login/login',{
                    username:this.username,password:this.password
                }).then(data=>data.data)
            }
        }
    }
</script>

<style scoped>

</style>