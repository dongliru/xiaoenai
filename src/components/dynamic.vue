<template>
    <div id="dynamic">
       <div class='header'>
            <div class="button">
                  <ul class="clearfix">
                    <li class="twoPerson" v-on:click="tabToggle(1)" :class="{active:index==1}"><router-link to="/dynamic/twoPerson">二人</router-link></li>
                    <li class="community" v-on:click="tabToggle(2)" :class="{active:index==2}"><router-link to="/dynamic/community">社区</router-link></li>
                  </ul>
            </div>
           <div class="add ">
                  + 
           </div>
       </div>
       <router-view></router-view>
        
    </div>
    
</template>
<script>
    export default  {
        name: 'dynamic',
        data () {
           return {
                index:1
           }
        },
        methods:{
            tabToggle:function(index){
                this.index=index;
            }
        }
}
</script>
<style lang="scss">
    #dynamic {
        .header {
            height:30px;
            background:#E28CB1;
            padding:10px 0;
            .button {
                line-height:30px;
                .active {
                    background:white;
                }
                ul {
                    margin-left:50%;
                    li {
                        padding:0px 10px;
                        transform:translateX(-100%);

                    }
                }     
            }
            .add {
                position:absolute;
                color:white;
                right:12px;
                top:12px;
            }
            
        }
    }
</style>