<template>
    <div class="attention">
        <div class="content"> 
            <img src="../../../assets/关注.gif" alt="">
            <b>></b>
            <div class="head">
                <img src="../../../assets/test.jpg" alt="">
                <img src="../../../assets/keai.png" alt="">
                <img src="../../../assets/test.jpg" alt="">
                <img src="../../../assets/keai.png" alt="">
                <img src="../../../assets/test.jpg" alt="">
            </div>
        </div>
        <div class="hr">
        </div>
        <div class="nodynamic">
            <div class="total">
                <img src="../../../assets/story.gif" alt="">
                <div>您关注的人还没有发帖哦~</div>
            </div>
                
            </div>
    </div>
</template>
<script>
    
</script>
<style lang="scss">
$height:calc(100% - 202px);
    .attention {
        .content {
            position:relative;
            margin-bottom:10px;
            padding-top:10px;
            img {
                width:134px;
                height:24px;
            }
            b {
                position:absolute;
                right:10px;
                top:10px;
            }
            .head {
              
                     img {
                width:60px;
                height:60px;  
                border-radius: 30px; //将给img标签加border-radius没有效果  ？？？
                }
                
                   
            }
        }
        .hr {
            height:20px;
            background:#f4f4f4;
        }
        .nodynamic {
            height:$height;
            .total {
                // width:100%;
                // margin:0 auto;
                margin-top:50%;
                margin-left:50%;
                transform:translateY(-50%) translateX(-50%);
                img {
                    width:80px;
                    height:100px;
                margin-left:50%;
                transform: translateX(-50%);
               }
            div {
              
            }
            }
            
        }
    }
    
</style>
