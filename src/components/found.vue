<template>
    <div id="found">
       <div class='header'>
            发现
           <div class="add ">
                  <img src="../assets/jiang.png" alt="">
           </div>
       </div>
       <div class="entertainment">
            <i></i><b>娱乐模式</b>
            <div> ></div>
       </div>
       <div class="content">
            <table>
                <tr>
                    <td>
                        <div class="entertainment">
                                <i></i><b>在线娃娃机</b>
                        </div>
                    </td>
                    <td>
                        <div class="entertainment">
                                <i></i><b>今日特价</b>
                        </div>
                    </td>
                </tr>
            </table>
       </div>
    </div>
</template>
<script>
    
</script>
<style lang="scss">
    #found {
        background:#f4f4f4;
        .header {
            height:30px;
            background:#E28CB1;
            padding:10px 0;
            font-size:18px;
            text-align:center;
            color:white;
            position:relative;
        }
        .add {
            position:absolute;
            right:20px;
            top:10px;
            img {
                width:30px;
                height:30px;
            }
        }
        .entertainment {
            height:50px;
            background:white;
            margin-top:20px;
            // margin-bottom:20px;
            position:relative;
            i {
                display:inline-block;
                margin:10px 20px;
                width:30px;
                height:30px;
                border-radius:5px;
                background:#ebebeb;
                float:left;
            }
            b {
                display:inline;
                float:left;
                margin-top:15px;
            }
            div {
                position:absolute;
                top:10px;
                right:20px;
                color:#ebebeb;
            }
        }
    }
</style>