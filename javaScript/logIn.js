$("#form").validate({
    rules:{
        password:{
            required:true,
            minlength:3, 
            maxlength:32,
        },
        email:{
            required:true,
            email:true,
            remote:{
                url:"user/checkEmail.do",//用户名重复检查，别跨域调用
                type:"post",
                dataType: "json", 
                data: {                     //要传递的数据
                      email: function() {
                            return $(".email").val();
                     }
              }
            },
        },
        confirm_password:{
            required:true,
            minlength:3,
            equalTo:'.password'
        },
        mobilePhone:{
            required:true,
            phone_number:true,//自定义的规则
            digits:true,//整数
        },
        kaptchaImage:{
                required:true,//必填
                remote:{
                    url:"user/checkRandom.do",//用户名重复检查，别跨域调用
                    type:"post",
                    dataType: "json", 
                    data: {                     //要传递的数据
                            username: function() {
                                return $(".kaptchaImage").val();
                         }
                  }
                },
        }
    },
    //错误信息提示
    messages:{
        password:{
            required:"必须填写密码",
            minlength:"密码至少为3个字符",
            maxlength:"密码至多为32个字符",
        },
        email:{
            required:"请输入邮箱地址",
            email: "请输入正确的email地址",
            remote: "邮箱已存在",
        },
        confirm_password:{
            required: "请再次输入密码",
            minlength: "确认密码不能少于3个字符",
            equalTo: "两次输入密码不一致",//与另一个元素相同
        },
        mobilePhone:{
            required:"请输入手机号码",
            digits:"请输入正确的手机号码",
        },
        kaptchaImage:{
            required:"请输入验证码",
            remote: "验证码不正确",
        },
    
    },
});
//添加自定义验证规则
jQuery.validator.addMethod("phone_number", function(value, element) { 
    var length = value.length; 
    var phone_number = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/ 
    return this.optional(element) || (length == 11 && phone_number.test(value)); 
}, "手机号码格式错误"); 


