/**
 * Created by Administrator on 2015/5/5.
 */

var webSocketGame={
  can:null, //游戏所用canvas对象
  ctx:null //绘图所用到的canvas渲染上下文对象
};

//页面初始化
$(function(){
    //得到游戏中的canvas
    webSocketGame.can=$("drawing-pad");
    //得到渲染上下文
    webSocketGame.ctx=webSocketGame.can[0].getContext("2d");
    //绑定事件
    webSocketGame.can.mousedown(function(){

    }).mousemove(function(){

    }).mouseup(function(){

    })

})