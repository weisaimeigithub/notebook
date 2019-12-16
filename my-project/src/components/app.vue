<template>
    <div  id="contain">
        <h1>记事本</h1>
        <h2>开心</h2>
        <div class="btns">
            <router-link to="/home/register" class="btn">注册</router-link>
            <router-link to="/home/login" class="btn">登录</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>
<style scoped>
@import '../assets/css/app.css'
</style>
