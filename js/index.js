 $(document).ready(function(){
 	$(".globalcontent dd").hide();
    $(".globalcontent dt").click(function(){
        $(this).next().slideToggle();
        $(this).prevAll("dd").slideUp("slow");
        $(this).next().nextAll("dd").slideUp("slow");
        return false;
    });
});
// $(document).ready(function(){
// 	$(".globalcontent dd").hide();
//  $(".globalcontent dt").click(function(){
//      $(this).next().slideToggle();
//      $(this).prevAll("dd").slideUp("slow");
//      $(this).next().nextAll("dd").slideUp("slow");
//      return false;
//  });
//});


/*切换按钮js*/
$(function(){
	$('.main_js b').click(function(){
    $('.main_layer_zz').fadeIn(1000);
    $('.main_layer').show();
    $('body').css('overflow','hidden');
	var mobilewidth=screen.width;//获取手机屏幕的可视宽度
    var mobileheight=screen.height;//获取屏幕的可是高度
    var layerwidth=$('.main_layer').width();//获取弹层的宽度 
    var layerheight=$('.main_layer').height();//获取弹层的高度
   $('.main_layer').css({'left':mobilewidth/2-layerwidth/2+"px",'top':mobileheight/2-layerheight/2+"px"});//是弹层放在屏幕正中间
	})
	
})
/*取消切换*/
$('.del,.main_layer_top i').click(function(){
	$('.main_layer_zz').fadeOut(1000);
    $('.main_layer').hide();
    $('body').css('overflow','auto');
})

/*将切换的用户名赋值到页面上*/
$('.layer_content li').on('click','a',function(){
	var username=$(this).text();//获取角色名称
	$('.main_js strong').html(username);
	$('.del').click();
})
/*打开目录*/
$('.menulogo').click(function(){
	$('.globalcontent').show();
})
/*点击其中一个子目录，目录自动消失*/
$('.globalcontent dl').on('click','dd',function(){
	$('.globalcontent').hide();
})