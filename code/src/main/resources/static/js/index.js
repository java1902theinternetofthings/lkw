(function(){
Ext.onReady(panelLayout);
	
	function panelLayout() {
		var tab = Ext.create('Ext.TabPanel',{
			region : 'center',
			deferredRender : false,
			activeTab : 0,
			items : [ {
					contentEl : 'center1',
					title : '首页',
					autoScroll : true
				}],
			resizeTabs : true, // turn on tab resizing
			minTabWidth : 115,
			tabWidth : 135,
			enableTabScroll : true
		
		});
		
		var viewPort = Ext.create('Ext.Viewport', {
			layout : "border",
			items:[{
				region : 'north',
				minHeight : 50,
				contentEl : 'north'
			},{
				title : 'West Region is collapsible',
				region : 'west',
				xtype : 'panel',
				width : 200,
				collapsible : true, // 设置可折叠
				id : 'west-region-container',
				layout : 'fit',
				margins : '0 0 0 0',
				layout : 'accordion',
				title : '菜单',
				split : true,
				collapsible : true,
				layoutConfig : {
				animate : true
				},items:[{//手风琴菜单1开始
					title : '视频监控',
                    xtype : 'treepanel',
                    expanded : true,
                    animate : true,
                    enableDD : false,
                    border : false,
                    rootVisible:false,//不显示树根
                    containerScroll : true,
                    
                    //树形菜单开始
                    root:{
                    	text : '..',
                            id:'root',
                            children : [{
                                text : '视频监控配置',
                                id : '/',//id为跳转路径
                                leaf : true
                            }, {
                                text : '视频监控实播',
                                leaf : true,
                                id :'/'
                            }, {
                                text : '录像回放',
                                leaf : true,
                                id :'3'
                            }]
                    },//树形菜单结束
                    
                    //监听部分
                    listeners:{
                    	itemclick: function(v,r,item){
					var n = tab.getComponent(r.raw.id);
					 if(r.raw.id=='root'){
					 	return;
					 }
                                        if (!n) { // 判断是否已经打开该面板
                                            n = tab.add({
                                                'id' : r.raw.id,
                                                'title' : r.raw.text,
                                                 closable : true, // 通过html载入目标页
                                                 html : '<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="'+r.raw.id+'"></iframe>'
                                            });
                                        }
                                    tab.setActiveTab(n);
                             } 
                    }//监听部分结束
				}//手风琴菜单1结束
				
				,{//手风琴菜单2
                    title : '巡维管理',
                    xtype : 'treepanel',
                    expanded : true,
                    animate : true,
                    enableDD : false,
                    border : false,
                    rootVisible:false,//不显示树根
                    containerScroll : true,
                    root:{
                    	text : '..',
                            id:'root',
                            children : [{
                                text : '巡维计划',
                                id : '4',
                                leaf : true
                            }, {
                                text : '考勤规则设置',
                                leaf : true,
                                id :'5'
                            }, {
                                text : '巡维考勤',
                                leaf : true,
                                id :'6'
                            }, {
                                text : '巡检工作',
                                leaf : true,
                                id :'7'
                            }, {
                                text : '工单管理',
                                leaf : true,
                                id :'8'
                            }]
                    }, //监听部分
                    listeners:{
                    	itemclick: function(v,r,item){
					var n = tab.getComponent(r.raw.id);
					 if(r.raw.id=='root'){
					 	return;
					 }
                                        if (!n) { // 判断是否已经打开该面板
                                            n = tab.add({
                                                'id' : r.raw.id,
                                                'title' : r.raw.text,
                                                 closable : true, // 通过html载入目标页
                                                 html : '<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="'+r.raw.id+'"></iframe>'
                                            });
                                        }
                                    tab.setActiveTab(n);
                             } 
                    }//监听部分结束
                    },{//手风琴菜单3
                    title : '运行报表',
                    xtype : 'treepanel',
                    expanded : true,
                    animate : true,
                    enableDD : false,
                    border : false,
                    rootVisible:false,//不显示树根
                    containerScroll : true,
                    root:{
                    	text : '..',
                            id:'root',
                            children : [{
                                text : '水流量报表',
                                id : '9',
                                leaf : true
                            }, {
                                text : '单站点水流量查询表',
                                leaf : true,
                                id :'10'
                            }, {
                                text : '水流量智能分析报表',
                                leaf : true,
                                id :'11'
                            }, {
                                text : '村级多站点累计流量报表',
                                leaf : true,
                                id :'12'
                            }, {
                                text : '镇级各村累计流量报表',
                                leaf : true,
                                id :'13'
                            },{
                                text : '县级各镇累计流量报表',
                                leaf : true,
                                id :'14'
                            }]
                    }, //监听部分
                    listeners:{
                    	itemclick: function(v,r,item){
					var n = tab.getComponent(r.raw.id);
					 if(r.raw.id=='root'){
					 	return;
					 }
                                        if (!n) { // 判断是否已经打开该面板
                                            n = tab.add({
                                                'id' : r.raw.id,
                                                'title' : r.raw.text,
                                                 closable : true, // 通过html载入目标页
                                                 html : '<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="'+r.raw.id+'"></iframe>'
                                            });
                                        }
                                    tab.setActiveTab(n);
                             } 
                    }//监听部分结束
                    },{//手风琴菜单4
                    title : '动力设备报表',
                    xtype : 'treepanel',
                    expanded : true,
                    animate : true,
                    enableDD : false,
                    border : false,
                    rootVisible:false,//不显示树根
                    containerScroll : true,
                    root:{
                    	text : '..',
                            id:'root',
                            children : [{
                                text : '风机开启监测',
                                id : '15',
                                leaf : true
                            }, {
                                text : '水泵开启监测',
                                leaf : true,
                                id :'16'
                            }, {
                                text : '巡检评分汇总表',
                                leaf : true,
                                id :'17'
                            }]
                    }, //监听部分
                    listeners:{
                    	itemclick: function(v,r,item){
					var n = tab.getComponent(r.raw.id);
					 if(r.raw.id=='root'){
					 	return;
					 }
                                        if (!n) { // 判断是否已经打开该面板
                                            n = tab.add({
                                                'id' : r.raw.id,
                                                'title' : r.raw.text,
                                                 closable : true, // 通过html载入目标页
                                                 html : '<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="'+r.raw.id+'"></iframe>'
                                            });
                                        }
                                    tab.setActiveTab(n);
                             } 
                    }//监听部分结束
                    },{//手风琴菜单5
					title : '告警管理',
                    xtype : 'treepanel',
                    expanded : true,
                    animate : true,
                    enableDD : false,
                    border : false,
                    rootVisible:false,//不显示树根
                    containerScroll : true,
                    
                    //树形菜单开始
                    root:{
                    	text : '..',
                            id:'root',
                            children : [{
                                text : '告警列表',
                                id : '/list',//id为跳转路径
                                leaf : true
                            }, {
                                text : '异常数据汇总表',
                                leaf : true,
                                id :'2'
                            }]
                    },//树形菜单结束
                    
                    //监听部分
                    listeners:{
                    	itemclick: function(v,r,item){
					var n = tab.getComponent(r.raw.id);
					 if(r.raw.id=='root'){
					 	return;
					 }
                                        if (!n) { // 判断是否已经打开该面板
                                            n = tab.add({
                                                'id' : r.raw.id,
                                                'title' : r.raw.text,
                                                 closable : true, // 通过html载入目标页
                                                 html : '<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="'+r.raw.id+'"></iframe>'
                                            });
                                        }
                                    tab.setActiveTab(n);
                             } 
                    }//监听部分结束
				},{//手风琴菜单6
					title : '基础信息管理',
                    xtype : 'treepanel',
                    expanded : true,
                    animate : true,
                    enableDD : false,
                    border : false,
                    rootVisible:false,//不显示树根
                    containerScroll : true,
                    
                    //树形菜单开始
                    root:{
                    	text : '..',
                            id:'root',
                            children : [{
                                text : '站点管理',
                                id : '/login',//id为跳转路径
                                leaf : true
                            }, {
                                text : '人员管理',
                                id :'2',
                                children:[{
                        			id:'1',
                        			text:'巡维人员',
                        			leaf:true
                        		},{
                        			id:'1',
                        			text:'管理人员',
                        			leaf:true
                        		}]
                            },{
                                text : '流量告警设置',
                                id : '/login',//id为跳转路径
                                leaf : true
                            }]
                    },//树形菜单结束
                    
                    //监听部分
                    listeners:{
                    	itemclick: function(v,r,item){
					var n = tab.getComponent(r.raw.id);
					 if(r.raw.id=='root'){
					 	return;
					 }
                                        if (!n) { // 判断是否已经打开该面板
                                            n = tab.add({
                                                'id' : r.raw.id,
                                                'title' : r.raw.text,
                                                 closable : true, // 通过html载入目标页
                                                 html : '<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="'+r.raw.id+'"></iframe>'
                                            });
                                        }
                                    tab.setActiveTab(n);
                             } 
                    }//监听部分结束
				},{//手风琴菜单7
                    title : '系统管理',
                    xtype : 'treepanel',
                    expanded : true,
                    animate : true,
                    enableDD : false,
                    border : false,
                    rootVisible:false,//不显示树根
                    containerScroll : true,
                    root:{
                    	text : '..',
                            id:'root',
                            children : [{
                                text : '部门管理',
                                id : '9',
                                leaf : true
                            }, {
                                text : '用户管理',
                                leaf : true,
                                id :'10'
                            }, {
                                text : '角色管理',
                                leaf : true,
                                id :'11'
                            }, {
                                text : '日志管理',
                                leaf : true,
                                id :'12'
                            }]
                    }, //监听部分
                    listeners:{
                    	itemclick: function(v,r,item){
					var n = tab.getComponent(r.raw.id);
					 if(r.raw.id=='root'){
					 	return;
					 }
                                        if (!n) { // 判断是否已经打开该面板
                                            n = tab.add({
                                                'id' : r.raw.id,
                                                'title' : r.raw.text,
                                                 closable : true, // 通过html载入目标页
                                                 html : '<iframe scrolling="auto" frameborder="0" width="100%" height="100%" src="'+r.raw.id+'"></iframe>'
                                            });
                                        }
                                    tab.setActiveTab(n);
                             } 
                    }//监听部分结束
                    }
				
				]////
			},tab,{
				region : 'south',
				minHeight : 25,
				html:"<div align='center'>版权所有 xxxx有限公司 © 信息服务中心</div>"
			}
			
			
			]//
		});
	
	}
})();