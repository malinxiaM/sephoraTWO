// search
window.onload=function(){
    var search = document.getElementById("search-box");
    var list = document.getElementById("search-list");
    search.addEventListener("input",handlerSearch);
    var showNum = 4;
    var timer = null;
    function handlerSearch(){
        if(timer != null){
            return false;
        }
        timer = setTimeout(function(){
            var url = `https:https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${search.value}&json=1&p=3&sid=1422_21089_28131_26350_28266&req=2&csor=2`;
            jsonp(url,"cb")
            .then(function(res){
                var html = "";
                res.s.every((item,index)=>{
                    html += `<li>${item}</li>`
                    return index < showNum;
                })
                list.innerHTML = html;
            })
            timer = null;
        },100)
    }

}

// nav
$(document).ready(function(){
    $(".navigation-col>li").mouseover(function(){
        $(".navigation-col>li").removeClass();
        $(this).addClass("active")
    })
    $(".navigation-col>li").mouseout(function(){
        $(".navigation-col>li").removeClass()
    })
})



//字符串拼接
var arr = [
    {
        title:"热门",
        title2:"塑造立体轮廓",
        title3:"热销气垫",
        fir_li:"魅惑美唇",
        two_li_a1:"电光橘唇",
        two_li_a2:"聚光红唇",
        sed_li_a1:"电光橘唇",
        sed_li_a2:"聚光红唇",
        for_li_a1:"电光橘唇",
        for_li_a2:"聚光红唇",
        fiv_li:"热销气垫",
        six_li:"轻巧便携实力派",
        img:"https://ssl1.sephorastatic.cn/wcsfrontend/campaign/campaign_img/2019/01/banner/hp_navigationhot_20190208.jpg"
    },
    {
        title:"功效",
        title2:"塑造立体轮廓",
        title3:"热销气垫",
        fir_li:"魅惑美唇",
        two_li_a1:"电光橘唇",
        two_li_a2:"聚光红唇",
        sed_li_a1:"电光橘唇",
        sed_li_a2:"聚光红唇",
        for_li_a1:"电光橘唇",
        for_li_a2:"聚光红唇",
        fiv_li:"热销气垫",
        six_li:"轻巧便携实力派",
        img:"https://ssl2.sephorastatic.cn/wcsfrontend/campaign/campaign_img/2018/11/banner/hp_tiffany_20181102.jpg"

    },
    {
        title:"护肤",
        title2:"塑造立体轮廓",
        title3:"热销气垫",
        fir_li:"魅惑美唇",
        two_li_a1:"电光橘唇",
        two_li_a2:"聚光红唇",
        sed_li_a1:"电光橘唇",
        sed_li_a2:"聚光红唇",
        for_li_a1:"电光橘唇",
        for_li_a2:"聚光红唇",
        fiv_li:"热销气垫",
        six_li:"轻巧便携实力派",
        img:"https://ssl4.sephorastatic.cn/wcsfrontend/campaign/campaign_img/2019/01/banner/hp_navigationskin_20190207.jpg"

    },
    {
        title:"彩妆",
        title2:"塑造立体轮廓",
        title3:"热销气垫",
        fir_li:"魅惑美唇",
        two_li_a1:"电光橘唇",
        two_li_a2:"聚光红唇",
        sed_li_a1:"电光橘唇",
        sed_li_a2:"聚光红唇",
        for_li_a1:"电光橘唇",
        for_li_a2:"聚光红唇",
        fiv_li:"热销气垫",
        six_li:"轻巧便携实力派",
        img:"https://ssl1.sephorastatic.cn/wcsfrontend/campaign/campaign_img/2019/01/banner/hp_navigationmu1_20190124.jpg"

    },
    {
        title:"香水",
        title2:"塑造立体轮廓",
        title3:"热销气垫",
        fir_li:"魅惑美唇",
        two_li_a1:"电光橘唇",
        two_li_a2:"聚光红唇",
        sed_li_a1:"电光橘唇",
        sed_li_a2:"聚光红唇",
        for_li_a1:"电光橘唇",
        for_li_a2:"聚光红唇",
        fiv_li:"热销气垫",
        six_li:"轻巧便携实力派",
        img:"https://ssl3.sephorastatic.cn/wcsfrontend/campaign/campaign_img/2019/01/banner/hp_navigationfra1_20190118.jpg"

    },
    {
        title:"工具",
        title2:"塑造立体轮廓",
        title3:"热销气垫",
        fir_li:"魅惑美唇",
        two_li_a1:"电光橘唇",
        two_li_a2:"聚光红唇",
        sed_li_a1:"电光橘唇",
        sed_li_a2:"聚光红唇",
        for_li_a1:"电光橘唇",
        for_li_a2:"聚光红唇",
        fiv_li:"热销气垫",
        six_li:"轻巧便携实力派",
        img:"https://ssl3.sephorastatic.cn/wcsfrontend/campaign/campaign_img/2018/12/banner/hp_navigationtool_20181213.jpg"

    },
    {
        title:"男士护肤",
        title2:"塑造立体轮廓",
        title3:"热销气垫",
        fir_li:"魅惑美唇",
        two_li_a1:"电光橘唇",
        two_li_a2:"聚光红唇",
        sed_li_a1:"电光橘唇",
        sed_li_a2:"聚光红唇",
        for_li_a1:"电光橘唇",
        for_li_a2:"聚光红唇",
        fiv_li:"热销气垫",
        six_li:"轻巧便携实力派" ,
        img:"https://ssl4.sephorastatic.cn/wcsfrontend/campaign/campaign_img/2018/09/banner/hp_navigationmen_20180906.jpg"
    },
    {
        title:"洗护浴体",
        title2:"塑造立体轮廓",
        title3:"热销气垫",
        fir_li:"魅惑美唇",
        two_li_a1:"电光橘唇",
        two_li_a2:"聚光红唇",
        sed_li_a1:"电光橘唇",
        sed_li_a2:"聚光红唇",
        for_li_a1:"电光橘唇",
        for_li_a2:"聚光红唇",
        fiv_li:"热销气垫",
        six_li:"轻巧便携实力派",
        img:"https://ssl1.sephorastatic.cn/wcsfrontend/campaign/campaign_img/2019/01/banner/hp_navigationbody_20190207.jpg"

    },
    {
        title:"美发护发",
        title2:"塑造立体轮廓",
        title3:"热销气垫",
        fir_li:"魅惑美唇",
        two_li_a1:"电光橘唇",
        two_li_a2:"聚光红唇",
        sed_li_a1:"电光橘唇",
        sed_li_a2:"聚光红唇",
        for_li_a1:"电光橘唇",
        for_li_a2:"聚光红唇",
        fiv_li:"热销气垫",
        six_li:"轻巧便携实力派",
        img:"https://ssl2.sephorastatic.cn/wcsfrontend/campaign/campaign_img/2019/01/banner/hp_navigationhair_20190207.jpg"

    }
]
var html = "";
for(var i = 0 ; i < arr.length ; i ++){
    html += `
        <li>
            <span class=""></span>
            <a href="#" class="title">${arr[i].title}</a>
            <ul class="navigation-col-info-content">
                <li class="">
                    <a href="#">${arr[i].fir_li}</a>
                </li>
                <li class="">
                    <a href="#">${arr[i].title2}</a>
                </li>
                <li class="">
                    <a href="#">${arr[i].title3}</a>
                </li>
            </ul>
            <div class="navigation-content-hover"  >
                <div class="content-hover-infoWrap" >
                    <div class="content-hover-info">
                        <div class="content-hover-info-title">
                            <a href="#">${arr[i].title}</a>
                        </div>
                        <div class="content-hover-category">
                            <ul>
                                <ul>
                                    <li><a class="first-a" href="#">${arr[i].fir_li}</a></li> 
                                    <li>
                                        <a href="#">${arr[i].two_li_a1}</a>
                                        <a href="#">${arr[i].two_li_a2}</a>
                                    </li>
                                    <li>
                                        <a href="#">${arr[i].sed_li_a1}</a>
                                        <a href="#">${arr[i].sed_li_a2}</a>
                                    </li>
                                    <li>
                                        <a href="#">${arr[i].for_li_a1}</a>
                                        <a href="#">${arr[i].for_li_a2}</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li><a class="first-a" href="#">${arr[i].fiv_li}</a></li>
                                    <li><a href="#">${arr[i].six_li}</a></li>
                                </ul>
                            </ul>
                            <ul>
                                <ul>
                                    <li><a class="first-a" href="#">${arr[i].fir_li}</a></li> 
                                    <li>
                                        <a href="#">${arr[i].two_li_a1}</a>
                                        <a href="#">${arr[i].two_li_a2}</a>
                                    </li>
                                    <li>
                                        <a href="#">${arr[i].sed_li_a1}</a>
                                        <a href="#">${arr[i].sed_li_a2}</a>
                                    </li>
                                    <li>
                                        <a href="#">${arr[i].for_li_a1}</a>
                                        <a href="#">${arr[i].for_li_a2}</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li><a class="first-a" href="#">${arr[i].fiv_li}</a></li>
                                    <li><a href="#">${arr[i].six_li}</a></li>
                                </ul>
                            </ul>
                            <ul class="last">
                                <ul>
                                    <li><a class="first-a" href="#">${arr[i].fir_li}</a></li> 
                                    <li>
                                        <a href="#">${arr[i].two_li_a1}</a>
                                        <a href="#">${arr[i].two_li_a2}</a>
                                    </li>
                                    <li>
                                        <a href="#">${arr[i].sed_li_a1}</a>
                                        <a href="#">${arr[i].sed_li_a2}</a>
                                    </li>
                                    <li>
                                        <a href="#">${arr[i].for_li_a1}</a>
                                        <a href="#">${arr[i].for_li_a2}</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li><a class="first-a" href="#">${arr[i].fiv_li}</a></li>
                                    <li><a href="#">${arr[i].six_li}</a></li>
                                </ul>
                            </ul>
                        </div>
                        <ul class="logoAdPosition"></ul> 
                    </div>     
                    <ul class="adPosition">
                        <img src="${arr[i].img}" alt="">
                    </ul>
                </div>
            </div>
        </li>    
    `     
}

$(document).ready(function(){    
    $(".navigation-col>li").mouseover(function(){
        $(".navigation-col>li").find(".navigation-content-hover").hide();
        $(this).find(".navigation-content-hover").toggle();
    })
    $(".navigation-col>li").mouseout(function(){
        $(".navigation-col>li").find(".navigation-content-hover").hide();
    })
})

// banner
$(document).ready(function () {
    var mySwiper = new Swiper(".swiper-container",{
        navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
              hideOnClick: true,
              
        },
        pagination: {
              el: '.swiper-pagination',
              type: 'custom',
              renderCustom: function(swiper,current, total){
                var paginationHtml = "";
                for(var i= 0; i< total; i++) {
                 // 判断是不是激活焦点，是的话添加active类，不是就只添加基本样式类
                   if(i == (current -1)){
                      paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
                    }else{
                        paginationHtml += '<span class="swiper-pagination-customs"></span>';
                    }
                 }
                return paginationHtml;
             }
             
        },
        loop:true,
        autoplay:true,
        effect : 'fade',
       
    })
   })

//    Brand
var arr = [
    {
        image:"https://ssl1.sephorastatic.cn/wcsfrontend/brand/sephoracollection/sephoracollection_144X60.png",
        alt:"丝芙兰",
        title:"丝芙兰",
        _link:"点击查看"
    },
    {
        image:"https://ssl2.sephorastatic.cn/wcsfrontend/brand/lancome/lancome_144X60.png",
        alt:"兰蔻",
        title:"兰蔻",
        _link:"点击查看"
    },
    {
        image:"https://ssl3.sephorastatic.cn/wcsfrontend/brand/peterthomasroth/peterthomasroth_144X60.png",
        alt:"彼得罗夫",
        title:"彼得罗夫",
        _link:"查看详情"
    },
    {
        image:"https://ssl4.sephorastatic.cn/wcsfrontend/brand/givenchy/givenchy_144X60.png",
        alt:"纪梵希",
        title:"纪梵希",
        _link:"查看详情"
    },
    {
        image:"https://ssl1.sephorastatic.cn/wcsfrontend/brand/esteelauder/esteelauder_144X60.png",
        alt:"雅诗兰黛",
        title:"雅诗兰黛",
        _link:"查看详情"
    },
    {
        image:"https://ssl2.sephorastatic.cn/wcsfrontend/brand/sk-ii/sk-ii_144X60.png",
        alt:"SK-II",
        title:"SK-II",
        _link:"查看详情"
    },
    {
        image:"https://ssl3.sephorastatic.cn/wcsfrontend/brand/loewe/loewe_144X60.png",
        alt:"罗意威",
        title:"罗意威",
        _link:"查看详情"
    },
    {
        image:"https://ssl4.sephorastatic.cn/wcsfrontend/brand/nuxe/nuxe_144X60.png",
        alt:"欧树",
        title:"欧树",
        _link:"查看详情"
    },
    {
        image:"https://ssl1.sephorastatic.cn/wcsfrontend/brand/guerlain/guerlain_144X60.png",
        alt:"娇兰",
        title:"娇兰",
        _link:"查看详情"
    },
    {
        image:"https://ssl2.sephorastatic.cn/wcsfrontend/brand/dior/dior_144X60.png",
        alt:"迪奥",
        title:"迪奥",
        _link:"查看详情"
    },
    {
        image:"https://ssl3.sephorastatic.cn/wcsfrontend/brand/refa/refa_144X60.png",
        alt:"黎珐",
        title:"黎珐",
        _link:"查看详情"
    },
    {
        image:"https://ssl4.sephorastatic.cn/wcsfrontend/brand/mac/mac_144X60.png",
        alt:"魅可",
        title:"魅可",
        _link:"查看详情"
    },
    {
        image:"https://ssl1.sephorastatic.cn/wcsfrontend/brand/fresh/fresh_144X60.png",
        alt:"馥蕾诗",
        title:"馥蕾诗",
        _link:"查看详情"
    },
    {
        image:"https://ssl2.sephorastatic.cn/wcsfrontend/brand/wei/wei_144X60.png",
        alt:"蔚蓝之美",
        title:"蔚蓝之美",
        _link:"查看详情"
    },
    {
        image:"https://ssl3.sephorastatic.cn/wcsfrontend/brand/miumiu/miumiu_144X60.png",
        alt:"缪缪",
        title:"缪缪",
        _link:"查看详情"
    },
    {
        image:"https://ssl4.sephorastatic.cn/wcsfrontend/brand/caudalie/caudalie_144X60.png",
        alt:"欧缇丽",
        title:"欧缇丽",
        _link:"查看详情"
    },
]
var html2 = " ";
for(var i = 0; i < arr.length ; i++){
    html2 += `
    <li>
    <a class="module_tabGroupList_link Logo" href="#">
        <img src=${arr[i].image} alt=${arr[i].alt} title=${arr[i].title}>
    </a>
    <div class="module_tabGroupList_hover">
        <div class="module_tabGroupList_banner">${arr[i].title}</div>
        <a class="module_tabGroupList_link" href="#">${arr[i]._link}</a>
    </div>
</li>
    `
}