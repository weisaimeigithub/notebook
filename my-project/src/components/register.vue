<template>
    <div class="login">
        <form>
            <label  for="name">
                <input  type="text"  class="input" id="name"  @focus.stop="focus=1" @blur="focus=0"  v-model="own.name" placeholder="姓名">
                <em>*姓名不能为空且只能由字母、数字。下划线组成</em>
                <em>*该昵称已被使用</em>
            </label>
            <label for="tel">
                <input  type="text" class="input"  id="tel" @focus="focus=2"  @blur="focus=0" v-model="own.tel" placeholder="手机号">
                <em>手机号全为数字</em>
            </label>
            <label for="psw" class="last">
                <input  type="password"  class="input" id="psw" @focus="focus=0"  v-model="own.psw" placeholder="密码（不少于6位）">
                <em>密码不能小于6位</em>
            </label>
            <button class="loginSub" @click="addToSql">
                <span>注册记事本</span>
                <span>注册成功</span>
                <span>重新注册</span>
                <i class="fa fa-spinner fa-spin"></i>
                <i class="fa fa-check"></i>
                <i class="fa fa-times"></i>
            </button>
        </form>
    </div>
</template>
<script>
import qs from 'qs';
import {mapActions} from 'vuex'
export default {
    data(){
        return{
            own:{
                name:'',
                tel:'',
                psw:'',
            },
            icon:false,//控制转动
            result:false,//得到响应之后
            req:'',//控制注册成功与否样式字样
            focus:0,
            nameIn:true,
            telIn:true,
            pswIn:true
        };
    },
    methods:{
        ...mapActions(['register']),
        addToSql(){
            this.nameIn=(this.own.name==''||/\W/g.test(this.own.name))?false:true;
            this.telIn=(!this.own.tel.length)?false:true;
            this.pswIn=(this.own.psw.length<6)?false:true;
            if(this.nameIn&&this.telIn&&this.pswIn){
                     this.icon=true;
                     this.result=false;
                     this.req='';
                     setTimeout(()=>{
                         this.result=true;
                         this.icon=false;
                         this.register(this.own);
                         //注册成功状态
                         if(sessionStorage.register&&sessionStorage.register==1){
                             this.req=true;
                             this.own.name="";
                             this.own.tel='';
                             this.own.psw='';
                         }else{
                             this.req=false;
                         }
                     },1000);
            }
        }
    }
    
}
</script>
<style scoped>
@import '../assets/css/login.css';
</style>