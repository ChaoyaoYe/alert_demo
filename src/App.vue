<template>
  <div id="demo_alert">
    <el-row>
      <el-col :span="24">
        <div id="method_1" class="grid-content blue">
          <p>组件效果展示：</p>
          <p class="btns">
            <span class="yellow">请选择你想要的提示消息类型：</span>
            <el-button :type="msg_type==='1'?'success':''" @click="reset('1')">成功</el-button>
            <el-button :type="msg_type==='2'?'warning':''" @click="reset('2')">警告</el-button>
            <el-button :type="msg_type==='3'?'info':''" @click="reset('3')">信息</el-button>
            <el-button :type="msg_type==='4'?'danger':''" @click="reset('4')">危险</el-button>
          </p>
          <p>
            <el-input class="i_text" v-model="input" placeholder="请输入内容"></el-input>
            <el-button type="primary" @click="show1(input)">看看我们自己封装的组件效果</el-button>
            <el-button type="primary" @click="show2(input)">看看原生的组件效果</el-button>
          </p>
          <p>
            组件说明文件：
            <span class="red">
              {{directive}}
            </span>
            组件参数说明。
          </p>
          <p>msg_type为需要定义的消息类型（分别对应成功、警告、危险、信息等色彩）</p>
          <p>类型：String</p>
          <p>可选值：1,2,3,4</p>
          <hr/>
          <p>message参数为需要的文字</p>
          <p>类型：String</p>
          <hr/>
          <p>和原生的组件比  还没加入动画效果  就靠胡爸啦</p>
          <p>项目下载：$ git clone https://github.com/ChaoyaoYe/alert_demo.git</p>
        </div>
        <p v-for="(item, index) in alerts">
          <Alert :msg_type="item.msg_type" :message="item.message"></Alert>
        </p>
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
  export default{
    data(){
      return({
        'input':'大哥  你什么都还没输',
        'msg_type':'1',
        'alerts':[],
        'directive':'<Alert :msg_type="item.msg_type" :message="item.message"></Alert>'
      })
    },
    methods:{
      'show1'(str){
//        this.$message(str);
        this.alerts.push({'message':this.input, 'msg_type':this.msg_type});
      },
      'show2'(str){
        this.$message(str);
      },
      'reset'(num){
        this.msg_type=num;
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  //下面这段样式代码别看   随手写得   太不规范了
  html,body,div
    height 100%
  div.el-message
    height 36px
    line-height 36px
  #demo_alert
    #method_1.blue
      color #fff
      padding-top 30px
      padding-left 20%
      padding-right 20%
      background lightskyblue
      height 100%
      p
        line-height 2
        margin-bottom 16px
      p.btns
        span.yellow
          color yellow
      .i_text
        width 40%
      span.red
        color:red
</style>
