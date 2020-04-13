import config from "@/common/config";
import $ from 'jquery'
// import bus from '@until/bus.js'

function SubmitBtn(isclose,prevData){
    console.log("this is SubmitByn  Data:"+prevData);
    var userinfo= localStorage.getItem("userinfo");
    console.log(userinfo);
    var	v_Id = '';
	var AddOrEdit = "组件传值";//新增=a
	if(AddOrEdit !="A"){
		v_Id = prevData.v_Id;//数据vid
	var	Type = 'U';
	var	v_RoleId = prevData.v_RoleId;//复选框id
	}else{
		v_Id = "" ;
		Type = 'A';
	}
	var v_RoleName = $('input[name=v_RoleName]').val();
	var v_JurisdictionId  = '';
	$('input:checkbox:checked').each(function(){
		v_JurisdictionId  = v_JurisdictionId  + $(this).val() + ',';
	});
	v_JurisdictionId =v_JurisdictionId .substring(0,v_JurisdictionId .length-1);
	var v_Remark = $('textarea[name=v_Remark]').val();
	var v_OperatorId = '';
	var v_System = config.systemId;
	var v_CompanyId = "201808101442025910";
//	v_CompanyId = eval(userinfo)[0].companyId;

	if(v_RoleName  == ''){
	//	layer.alert('请填写角色名称!');
		return false;
	}
	if(v_JurisdictionId  == ''){
	//	layer.alert('请勾选权限后再提交!');
		return false;
	}
	var JsonData = new Object;
	if(AddOrEdit != 'A'){
		JsonData['v_Id'] = v_Id;
		JsonData['v_RoleId'] = v_RoleId;
	}
	JsonData['Type'] = Type;
	JsonData['v_OperatorId'] = v_OperatorId;
	JsonData['v_RoleName'] = v_RoleName;
	JsonData['v_Remark'] = v_Remark;
	JsonData['v_System'] = v_System;
	JsonData['v_CompanyId'] = v_CompanyId;
	var t_ROLE = new Object;
	t_ROLE['v_JurisdictionId'] = v_JurisdictionId;
	JsonData['t_ROLE'] = t_ROLE;
	JsonData = JSON.stringify(JsonData)
	$.ajax({
		url:config.url+'RoleDetail',
		type:'POST', //GET
		async:true,    //或false,是否异步
		data:{
			JsonData:JsonData
		},
		dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
		success:function(data){
			if(data['code'] == 200){
				layer.confirm(title+'成功!', {
					btn: [index==0?'确定':'OK'], //按钮
					time:0,
				},  function(){
					var layid = GetQueryString("layid");
					var iframeid = GetQueryString('iframeid');
					if(AddOrEdit=='U'&&isclose==false){
						layer.closeAll();
						location.reload();
						parent.document.getElementById(iframeid).contentWindow.location.reload();
					}else{
						parent.document.getElementById(iframeid).contentWindow.location.reload();
					}
				});
				console.log("成功！ 刷新页面");
				location.reload();

			}else if(data['code'] == 511){
			//	layer.alert('已存在!');
			}else{
			//	layer.alert('提交失败!');
			}
		},
		error:function(data){
		//	layer.alert('系统登录超时或遇到意外错误，请重新登录，或联系系统管理员!');
		},
	});
}
function OnLoad() {
    console.log(2)
	getUserRoleList();
	var title = '保存';
	getUserRoleOne("组件传值v_ID")
	$('.submitBtntitle').text(title);
}
function getUserRoleList(){
    console.log(3)
    var JsonData = {
		Type : 'S',
		v_System : config.systemId,
	}
	JsonData = JSON.stringify(JsonData)
	$.ajax({
		url:config.url+'GetDataList',
		type:'POST', //GET
		async:false,    //或false,是否异步
		data:{
			JsonData:JsonData
		},
		dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
		success:function(data){
			var html = '';
			if(data['code'] == 200){
				var res = data.data;
				for(var key in res){
					html += '<div class="first"><input type="checkbox" value="'+res[key].v_MyNodeId+'" name="first_'+key+'" onclick="checkAllChildren(this,\'first\','+key+')"/> <span>'+res[key].v_MyNodeName+'</span></div>'
					if(res[key]['Children'] != false){
						for(var key1 in res[key]['Children']){
							html += '<div class="second"><input type="checkbox" value="'+res[key]['Children'][key1].v_MyNodeId+'" name="second_'+key+'" onclick="checkAllChildren(this,\'second\','+key+')"/> <span>'+res[key]['Children'][key1].v_MyNodeName+'</span></div>'
							if(res[key]['Children'][key1]['Children'] !=  false){
								for(var key2 in res[key]['Children'][key1]['Children']){
									html += '<div class="third"><input type="checkbox" value="'+res[key]['Children'][key1]['Children'][key2].v_MyNodeId+'" name="third_'+key+'" onclick="checkAllChildren(this,\'third\','+key+')" /> <span>'+res[key]['Children'][key1]['Children'][key2].v_MyNodeName+'</span>';
									if(res[key]['Children'][key1]['Children'][key2]['Children'] !=  false){
										html += '（ &nbsp;';
										for(var key3 in res[key]['Children'][key1]['Children'][key2]['Children']){
											html += '<input type="checkbox" value="'+res[key]['Children'][key1]['Children'][key2]['Children'][key3].v_MyNodeId+'" name="fourth_'+key+'" onclick="checkAllChildren(this,\'fourth\','+key+')" /> <span>'+res[key]['Children'][key1]['Children'][key2]['Children'][key3].v_MyNodeName+'</span>';
										}
										html += '）';
									}
									html += '</div>'
								}
							}
						}
					}
				}
				$('.conCheckbox').append(html);
			}else{
				//layer.alert('获取失败:'+data['msg']);
			}
		},
		error:function(data){
			//layer.alert('系统登录超时或遇到意外错误，请重新登录，或联系系统管理员!');
		},
	})
}

function getUserRoleOne(v_Id){
    console.log(4)
	var JsonData = {
		Type : 'O',
		v_Id : v_Id,
		v_System : config.systemId,
	}
	JsonData = JSON.stringify(JsonData)
	$.ajax({
		url:config.url+'RoleDetail',
		type:'POST', //GET
		async:false,    //或false,是否异步
		data:{
			JsonData:JsonData
		},
		dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
		success:function(data){
			if(data['code'] == 200){
				var res = data.data;
				$('input[name=v_RoleName]').val(res.data.v_RoleName);
				$('textarea[name=v_Remark]').val(res.data.v_Remark);
				jurisdiction = [];
				for(var key in res['jurisdiction']){
					jurisdiction.push(res['jurisdiction'][key]['v_JurisdictionId']);
				}
				$('input[type=checkbox]').each(function(){
					if(jurisdiction.indexOf($(this).val()) != -1){
						$(this).attr('checked','checked')
					}
				})
			}else{
			//	layer.alert('获取失败:'+data['msg']);
			}
		},
		error:function(data){
			//layer.alert('系统登录超时或遇到意外错误，请重新登录，或联系系统管理员!');
		},
	})
}
function checkAllChildren(obj,name,level){
    console.log(5)
    if($(obj).is(':checked') == true){
	    var flag = true;
	   }else{
	    var flag = false;
	   }
	   if(name == 'first'){
	    $('input[name=second_'+level+'],input[name=third_'+level+'],input[name=fourth_'+level+']').each(function(){
	     if(flag == true){
	      $(this).prop('checked',true);
	     }else{
	      $(this).prop('checked',false);
	     }
	    })
	   }else if(name == 'second'){
	    $('input[name=first_'+level+']').prop('checked',true)
	    nextdiv = $(obj).parent('div').next('div')
	    while(nextdiv.hasClass('third')){
	     if(flag == true){
	      nextdiv.find('input').prop('checked',true);
	     }else{
	      nextdiv.find('input').prop('checked',false);
	     }
	     nextdiv = nextdiv.next('div')
	    }
	   }else if(name == 'third'){
	    $('input[name=first_'+level+']').prop('checked',true)
	    $(obj).parent('div').prev().find('input').prop('checked',true)
	    // console.log($(obj).parent('div').prev().html());
	    $(obj).next().next().find('input').each(function(){
	     if(flag == true){
	      $(this).prop('checked',true);
	     }else{
	      $(this).prop('checked',false);
	     }
	    })
	   }
}
export default{
    SubmitBtn,
    OnLoad,
    getUserRoleList,
    getUserRoleOne,
    checkAllChildren
}