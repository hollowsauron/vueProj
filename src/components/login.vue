<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>
                    通用后台管理系统
                </span>
            </div>
            <el-form :model="loginForm" label-width="80px" ref="loginForm" :rules="rules">
                <el-form-item prop="username" label="用户名">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <el-form-item prop="password" label="密码">
                    <el-input type="password" v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleLogin('loginForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    import {nameRules,passwordRules}from '@/utils/validate'
    import {setToken} from '@/utils/token'
    import {login} from '@/api/api.js'
export default {
    data() {
        return {
            loginForm:{
                username:'',
                password:''
            },
            rules:{
                username:[{validator:nameRules,trigger:'blur'}],
                password:[{validator:passwordRules,trigger:'blur'}]
            }
        }
    },
    methods:{
        handleLogin(form){
            this.$refs[form].validate((valid)=>{
                if(valid){
                    console.log(this)
                    // this.service.post('/login',this.loginForm) //由于每个接口的请求地址不同，我们统一放在api文件夹下管理
                    // .then(res=>{
                    //     console.log(res)
                    //     if(res.data.status===200){
                    //         setToken('username',res.data.username)
                    //         setToken('token',res.data.token)
                    //         this.$message({message:res.data.message, type:'success'})
                    //         this.$router.push('/home')
                    //     }
                    // })
                    login(this.loginForm)
                    .then(res=>{
                        console.log(res)
                        if(res.data.status===200){
                            setToken('username',res.data.username)
                            setToken('token',res.data.token)
                            this.$message({message:res.data.message, type:'success'})
                            this.$router.push('/home')
                        }
                    })
                    .catch(err=>{
                        console.error(err)
                    })
                }
                else{
                    console.error(this.loginForm)
                }
            })

        }
    }
}
</script>
<style scoped lang="scss">
.login{
    width: 100%;
    height: 100%;
    position: absolute;
    background: #409EFF;
    .box-card{
        width:450px;
        margin:200px auto; 
        .clearfix{
            font-size: 34px;
        }
        .el-button{
            width:100%;
        }
    }
}
</style>