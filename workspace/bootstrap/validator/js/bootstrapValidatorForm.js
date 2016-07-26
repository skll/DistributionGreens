$(document).ready(function() {
	    $('#userDedatilForm').bootstrapValidator({
	//        live: 'disabled',
	        message: 'This value is not valid',
	        feedbackIcons: {
	            valid: 'glyphicon glyphicon-ok',
	            invalid: 'glyphicon glyphicon-remove',
	            validating: 'glyphicon glyphicon-refresh'
	        },
	        fields: {
	            account: {//验证input项：验证规则
	                 message: 'The account is not valid',
	                 validators: {
	                     notEmpty: {//非空验证：提示消息
	                         message: '用户名不能为空'
	                     },
	                     stringLength: {
	                         min: 6,
	                         max: 30,
	                         message: '用户名长度必须在6到30之间'
	                     },
	                     threshold :  6 , //有6字符以上才发送ajax请求，（input中输入一个字符，插件会向服务器发送一次，设置限制，6字符以上才开始）
	                     remote: {//ajax验证。server result:{"valid",true or false} 向服务发送当前input name值，获得一个json数据。例表示正确：{"valid",true}  
	                         url: 'exist2.do',//验证地址
	                         message: '用户已存在',//提示消息
	                         delay :  2000,//每输入一个字符，就发ajax请求，服务器压力还是太大，设置2秒发送一次ajax（默认输入一个字符，提交一次，服务器压力太大）
	                         type: 'POST'//请求方式
	                         /**自定义提交数据，默认值提交当前input value
	                          *  data: function(validator) {
	                               return {
	                                   password: $('[name="passwordNameAttributeInYourForm"]').val(),
	                                   whatever: $('[name="whateverNameAttributeInYourForm"]').val()
	                               };
	                            }
	                          */
	                     },
	                     regexp: {
	                         regexp: /^[a-zA-Z0-9_\.]+$/,
	                         message: '用户名由数字字母下划线和.组成'
	                     }
	                 }
	             },
	             username: {
	                validators: {
	                	notEmpty: {
	                        message: '姓名不能为空'
	                    },
	                    stringLength: {
	                         min: 2,
	                         max: 10,
	                         message: '姓名长度必须在2到10之间'
	                     },
	                }
	            },
	            email: {
	                validators: {
	                	notEmpty: {
	                        message: '邮箱不能为空'
	                    },
	                    emailAddress: {
	                        message: '请填写正确的邮箱地址'
	                    }
	                }
	            },
	            mobilephone: {
	                 message: 'The phone is not valid',
	                 validators: {
	                     notEmpty: {
	                         message: '手机号码不能为空'
	                     },
	                     stringLength: {
	                         min: 11,
	                         max: 11,
	                         message: '请输入11位手机号码'
	                     },
	                     regexp: {
	                         regexp: /^1[3|5|8]{1}[0-9]{9}$/,
	                         message: '请输入正确的手机号码'
	                     }
	                 }
	             }
	        }
	    });
	
	});