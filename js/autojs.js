// JavaScript Document
var auto={
    psWidth:640,
    autoFun:function(){
        var htmlNode=document.documentElement;
        var winWidth=htmlNode.clientWidth;
        if(winWidth >= this.psWidth){
            htmlNode.style.fontSize="625%";
        }
        else{
            htmlNode.style.fontSize=winWidth/this.psWidth*625+"%";
        }
    },
    init:function(){
        this.autoFun();
        var that=this;
        window.addEventListener("resize",that.autoFun);
    }
};
auto.init(); 
