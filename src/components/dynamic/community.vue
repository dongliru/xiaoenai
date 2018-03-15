<template>
    <div id="community">
        <div class='header'>
            <ul class="clearfix">
                <li class="hot" v-on:click="toggle(1)" :class="{active:mark==1}"><router-link to="/dynamic/community">热门</router-link></li>
                <li class="fresh" v-on:click="toggle(2)" :class="{active:mark==2}"><router-link to='/dynamic/community/fresh'>新鲜</router-link></li>
                <li class="attention" v-on:click="toggle(3)" :class="{active:mark==3}"><router-link to='/dynamic/community/attention'>关注</router-link></li>
            </ul>
        </div>
        <router-view></router-view>

     
    </div>
</template>
<script> 
import dynamic from '../dynamic.vue'
export default  {
        name: 'dynamic',
        data () {
           return {
                mark:1
           }
        },
        //props:["tabToggle"],  //怎么将父组件中的方法传递给子组件
        methods:{
            toggle:function(mark){
                this.mark = mark;
            }
        }
}
</script>
<style lang="scss">
    #community {
        .header {
            background:white;
            height:20px;
            margin-left:50%;
            padding-top:0px;
            li {
                transform:translateX(-150%);
                padding:5px 10px;
                a {
                    color:black;
                }
            }
            .active {
                border-bottom:1px solid red;
                a {
                    color:#E28CB1;
                }
            }
        }
        .stick  {
            // color:white;
                margin-top:2px;
                font-size:14px;
            div {
                margin:5px 0;
                border-bottom:1px solid #ccc;
               
            }
            b {
                background:#e26591;
                margin-left:10px;
            }
            
            
        }
        .content {
            margin-left:10px;
            .title {
                font-size:16px;
                margin:3px 0;
            }
            .subheading {
                font-size:14px;
            }   
            .text {
                img {
                    width:30%;
                }
            }
        }
    }
</style>