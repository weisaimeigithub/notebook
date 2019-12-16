import  Vue from 'vue';

const REGISTER='REGITER';//注册
const SIGN_IN='SIGN_IN';//登录
const SIGN_OUT='SIGN_OUT';//退出登录

export default{
    state:{},
    mutations:{
        //这些都是计算属性，仅仅对数据进行简单的处理
        [REGISTER](state,user){
            //判断是否同姓名
            var b=0;
            for(var i=0;i<localStorage.length;i++){
                if(localStorage.key(i).indexOf('user')!=-1){
                    //为用户
                    if(JSON.parse(localStorage.getItem(localStorage.key(i))).name==user.name){
                        b=1;
                        break;
                    }
                    if(b==0){
                        //添加本地存储用户
                        localStorage.setItem('user'+localStorage.length,JSON.stringify(user));
                        sessionStorage.register=1;//注册成功
                    }else{
                        sessionStorage.register=0;
                    }
                }
            }
        },
        [SIGN_IN](state,user){
           //根据tel找相应user
           var localuser='',f=0;
           //如果此用户存在
           for(var i=0;i<localStorage.length;i++){
               if(localStorage.key(i).indexOf('user')!=-1){
                   //为用户
                   if(JSON.parse(localStorage.getItem(localStorage.key(i))).name==user.name){
                       localuser=JSON.parse(localStorage.getItem(localStorage.key(i)));
                            f=1;
                            break;
               }
               //存在该用户并密码正确
               if(f==1&&user.psw==localStorage.psw){
                   sessionStorage.login=1;//登录成功
                   sessionStorage.user=JSON.stringify.key(localuser);
                   sessionStorage.userId=localStorage.key(i);
               }else{
                   sessionStorage.login=0;
               }

           }
        }
     },
     [SIGN_OUT](state){
         sessionStorage.register=0;
         sessionStorage.login=0;
     }
  },
  actions:{
       register({commit},user){
           //触发注册操作
           commit(REGISTER,user);
       },
       signIn({commit},user){
           //触发登录操作
           commit(SIGN_IN,user);
       },
       signOut({commit}){
           //触发退出登录操作
           commit(SIGN_OUT);
       }
  }
}