import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
	    path: '/',
	    name: 'index_main',
	    component: (index_main) => require(['@/components/index_main'], index_main),
	    meta: {
	      title: '首页'
	    }
	},{
		path: '/index_projects',
	    name: 'index_projects',
	    component: (index_projects) => require(['@/components/index_projects'], index_projects),
	    meta: {
	      title: '项目'
	    }
	},{
		path: '/index_members',
		name: 'index_members',
		component: (index_members) => require(['@/components/index_members'], index_members),
		meta: {
			title: '找人'
		}
	},{
		path: '/index_self',
		name: 'index_self',
		component: (index_self) => require(['@/components/index_self'], index_self),
		meta: {
			title: '我的'
		}
	},{
		path: '/author',
		name: 'author',
		component: (author) => require(['@/view/assembly/author'], author),
		meta: {
			title: '授权登录..'
		}
	},{
		path: '/wxauthbind',
		name: 'wxauthbind',
		component: (wxauthbind) => require(['@/view/assembly/wxauthbind'], wxauthbind),
		meta: {
			title: '手机号绑定'
		}
	},{
		path: '/mytasklist',
		name: 'mytasklist',
		component: (mytasklist) => require(['@/components/mytasklist'], mytasklist),
		meta: {
			title: '我的发布项目'
		}
	},{
		path: '/myaccepttaskslist',
		name: 'myaccepttaskslist',
		component: (myaccepttaskslist) => require(['@/components/myaccepttaskslist'], myaccepttaskslist),
		meta: {
			title: '我参与的项目'
		}
	},{
		path: '/harvestlist/:id',
		name: 'harvestlist',
		component: (harvestlist) => require(['@/components/harvestlist'], harvestlist),
		meta: {
			title: '我参与的项目动态详情'
		}
	},{
		path: '/getdeliver/:id',
		name: 'getdeliver',
		component: (getdeliver) => require(['@/components/getdeliver'], getdeliver),
		meta: {
			title: '我参与的项目确定发布'
		}
	},{
		path: '/getharvest/:id',
		name: 'getharvest',
		component: (getharvest) => require(['@/components/getharvest'], getharvest),
		meta: {
			title: '我参与的项目发布动态'
		}
	},{
    	path: '/engineerEvaluate/:id',
    	name: 'engineerEvaluate',
    	component: (engineerEvaluate) => require(['@/components/engineerEvaluate'], engineerEvaluate),
    	meta: {
    		title: '合作评价',
    		isbg: true
    	}
    },{
    	path: '/bounty/:id',
    	name: 'bounty',
    	component: (bounty) => require(['@/components/bounty'], bounty),
    	meta: {
    		title: '项目费用支付'
    	}
    },{
    	path: '/twophase/:id',
    	name: 'twophase',
    	component: (twophase) => require(['@/components/twophase'], twophase),
    	meta: {
    		title: '项目尾款支付'
    	}
    },{
    	path: '/evaluate/:id',
    	name: 'evaluate',
    	component: (evaluate) => require(['@/components/evaluate'], evaluate),
    	meta: {
    		title: '合作评价',
    		isbg: true
    	}
    },{
    	path: '/notes/:id',
    	name: 'notes',
    	component: (notes) => require(['@/components/notes'], notes),
    	meta: {
    		title: '项目备注'
    	}
    },{
    	path: '/dynamic/:id',
    	name: 'dynamic',
    	component: (dynamic) => require(['@/components/dynamic'], dynamic),
    	meta: {
    		title: '发布动态'
    	}
    },{
    	path: '/appeal/:id',
    	name: 'appeal',
    	component: (appeal) => require(['@/components/appeal'], appeal),
    	meta: {
    		title: '申诉维权'
    	}
    },{
    	path: '/taskaccept/:id',
    	name: 'taskaccept',
    	component: (taskaccept) => require(['@/components/taskaccept'], taskaccept),
    	meta: {
    		title: '项目验收'
    	}
    },{
		path: '/message',
		name: 'message',
		component: (message) => require(['@/components/message'], message),
		meta: {
			title: '信息列表'
		}
	},{
		path: '/engineer',
		name: 'engineer',
		component: (engineer) => require(['@/components/engineer'], engineer),
		meta: {
			title: '工程师入驻'
		}
	},{
		path: '/changepass',
		name: 'changepass',
		component: (changepass) => require(['@/components/changepass'], changepass),
		meta: {
			title: '修改密码'
		}
	},{
    	path: '/login',
    	name: 'login',
    	component: (login) => require(['@/components/login'], login),
    	meta: {
    		title: '登录'
    	}
    },{
    	path: '/smslogin',
    	name: 'smslogin',
    	component: (smslogin) => require(['@/components/smslogin'], smslogin),
    	meta: {
    		title: '短信登录'
    	}
    },{
    	path: '/register',
    	name: 'register',
    	component: (register) => require(['@/components/register'], register),
    	meta: {
    		title: '注册'
    	}
    },{
    	path: '/welcome',
    	name: 'welcome',
    	component: (welcome) => require(['@/view/create/welcome'], welcome),
    	meta: {
    		title: '欢迎入驻平台',
    		isbg: true
    	}
    },{
    	path: '/engineerDetails/:id',
    	name: 'engineerDetails',
    	component: (engineerDetails) => require(['@/view/engineer/engineerDetails'], engineerDetails),
    	meta: {
    		title: '工程师详情页',
    		isbg: true
    	}
    },{
    	path: '/user_engineer',
    	name: 'user_engineer',
    	component: (user_engineer) => require(['@/view/engineer/user_engineer'], user_engineer),
    	meta: {
    		title: '成为工程师',
    		isbg: true
    	}
    },{
    	path: '/enterpriseDetails/:id',
    	name: 'enterpriseDetails',
    	component: (enterpriseDetails) => require(['@/view/enterprise/enterpriseDetails'], enterpriseDetails),
    	meta: {
    		title: '企业详情页',
    		isbg: true
    	}
    },{
    	path: '/enterprise_vip',
    	name: 'enterprise_vip',
    	component: (enterprise_vip) => require(['@/view/enterprise/enterprise_vip'], enterprise_vip),
    	meta: {
    		title: '企业vip资费',
    		isbg: true
    	}
    },{
    	path: '/projectsDetails/:id',
    	name: 'projectsDetails',
    	component: (projectsDetails) => require(['@/view/projects/projectsDetails'], projectsDetails),
    	meta: {
    		title: '项目详情页',
    		isbg: true
    	}
    },{
    	path: '/agreement',
    	name: 'agreement',
    	component: (agreement) => require(['@/components/agreement'], agreement),
    	meta: {
    		title: '协议',
    		isbg: true
    	}
    },{
    	path: '/layer',
    	name: 'layer',
    	component: (layer) => require(['@/components/layer'], layer),
    	meta: {
    		title: '模态弹出框组件',
    		isbg: true
    	}
    },{
    	path: '/sendLive',
    	name: 'sendLive',
    	component: (sendLive) => require(['@/view/create/sendLive'], sendLive),
    	meta: {
    		title: '我要发活',
    		isbg: true
    	}
    },{
    	path: '/service',
    	name: 'service',
    	component: (service) => require(['@/view/create/service'], service),
    	meta: {
    		title: '联系客服',
    		isbg: true
    	}
    },{
    	path: '/cost/:id',
    	name: 'cost',
    	component: (cost) => require(['@/view/create/cost'], cost),
    	meta: {
    		title: '造价',
    		isbg: true
    	}
    },{
    	path: '/cost1',
    	name: 'cost1',
    	component: (cost1) => require(['@/view/create/cost1'], cost1),
    	meta: {
    		keepAlive: true, //此组件需要被缓存
    		title: '造价',
    		isbg: true
    	}
    },{
    	path: '/cost2/:id',
    	name: 'cost2',
    	component: (cost2) => require(['@/view/create/cost2'], cost2),
    	meta: {
    		keepAlive: true, //此组件需要被缓存
    		title: '造价',
    		isbg: true
    	}
    },{
    	path: '/consulting',
    	name: 'consulting',
    	component: (consulting) => require(['@/view/create/consulting'], consulting),
    	meta: {
    		title: '工程咨询',
    		isbg: true
    	}
    },{
    	path: '/tender',
    	name: 'tender',
    	component: (tender) => require(['@/view/create/tender'], tender),
    	meta: {
    		title: '标书编制',
    		isbg: true
    	}
    },{
    	path: '/design',
    	name: 'design',
    	component: (design) => require(['@/view/create/design'], design),
    	meta: {
    		title: '工程设计',
    		isbg: true
    	}
    },{
    	path: '/problem',
    	name: 'problem',
    	component: (problem) => require(['@/view/create/problem'], problem),
    	meta: {
    		title: '问题咨询',
    		isbg: true
    	}
    },{
    	path: '/other',
    	name: 'other',
    	component: (other) => require(['@/view/create/other'], other),
    	meta: {
    		title: '其他',
    		isbg: true
    	}
    },{
    	path: '/gotender',
    	name: 'gotender',
    	component: (gotender) => require(['@/view/projects/gotender'], gotender),
    	meta: {
    		title: '参与投标',
    		isbg: true
    	}
    },{
    	path: '/info',
    	name: 'info',
    	component: (info) => require(['@/components/info'], info),
    	meta: {
    		title: '基本信息'
    	}
    },{
    	path: '/promote',
    	name: 'promote',
    	component: (promote) => require(['@/components/promote'], promote),
    	meta: {
    		title: '我的推广'
    	}
    },{
    	path: '/team',
    	name: 'team',
    	component: (team) => require(['@/view/user/team'], team),
    	meta: {
    		title: '我的团队'
    	}
    },{
    	path: '/create',
    	name: 'create',
    	component: (create) => require(['@/view/user/create'], create),
    	meta: {
    		title: '创建团队'
    	}
    },{
    	path: '/teamplayer/:id',
    	name: 'teamplayer',
    	component: (teamplayer) => require(['@/view/user/teamplayer'], teamplayer),
    	meta: {
    		title: '成员管理'
    	}
    },{
    	path: '/self',
    	name: 'self',
    	component: (self) => require(['@/view/create/self'], self),
    	meta: {
    		title: '选择项目类型'
    	}
    },{
    	path: '/cashout',
    	name: 'cashout',
    	component: (cashout) => require(['@/view/user/cashout'], cashout),
    	meta: {
    		title: '收支明细'
    	}
    },{
    	path: '/extract',
    	name: 'extract',
    	component: (extract) => require(['@/components/extract'], extract),
    	meta: {
    		title: '我要提现'
    	}
    },{
		path: '/paylist',
		name: 'paylist',
		component: (paylist) => require(['@/components/paylist'], paylist),
		meta: {
			title: '支付认证绑定'
		}
	},{
		path: '/bankauth',
		name: 'bankauth',
		component: (bankauth) => require(['@/components/bankauth'], bankauth),
		meta: {
			title: '银行卡添加'
		}
	},{
		path: '/bankauthlist',
		name: 'bankauthlist',
		component: (bankauthlist) => require(['@/components/bankauthlist'], bankauthlist),
		meta: {
			title: '银行卡认证'
		}
	},{
		path: '/alipayauth',
		name: 'alipayauth',
		component: (alipayauth) => require(['@/components/alipayauth'], alipayauth),
		meta: {
			title: '支付宝认证'
		}
	},{
    	path: '/bankauthschedule/:cinfo',
    	name: 'bankauthschedule',
    	component: (bankauthschedule) => require(['@/components/bankauthschedule'], bankauthschedule),
    	meta: {
    		title: '认证申请进度'
    	}
    },{
    	path: '/alipayauthlist',
    	name: 'alipayauthlist',
    	component: (alipayauthlist) => require(['@/components/alipayauthlist'], alipayauthlist),
    	meta: {
    		title: '支付宝认证'
    	}
    },{
    	path: '/alipayauthschedule/:cinfo',
    	name: 'alipayauthschedule',
    	component: (alipayauthschedule) => require(['@/components/alipayauthschedule'], alipayauthschedule),
    	meta: {
    		title: '认证申请进度'
    	}
    },{
    	path: '/help',
    	name: 'help',
    	component: (help) => require(['@/view/user/help'], help),
    	meta: {
    		title: '帮助中心'
    	}
    },{
    	path: '/advice',
    	name: 'advice',
    	component: (advice) => require(['@/view/user/advice'], advice),
    	meta: {
    		title: '投诉建议'
    	}
    },{
    	path: '/resume',
    	name: 'resume',
    	component: (resume) => require(['@/view/user/resume'], resume),
    	meta: {
    		title: '履历'
    	}
    },{
		path: '/password',
		name: 'password',
		component: (password) => require(['@/components/password'], password),
		meta: {
			title: '忘记密码'
		}
	},{
		path: '/cash',
		name: 'cash',
		component: (cash) => require(['@/components/cash'], cash),
		meta: {
			title: '提现'
		}
	},{
		path: '/certificate',
		name: 'certificate',
		component: (certificate) => require(['@/view/user/certificate'], certificate),
		meta: {
			title: '职业证书'
		}
	},{
		path: '/upload',
		name: 'upload',
		component: (upload) => require(['@/view/user/upload'], upload),
		meta: {
			title: '上传证书'
		}
	},{
		path: '/experience',
		name: 'experience',
		component: (experience) => require(['@/view/user/experience'], experience),
		meta: {
			title: '项目经验'
		}
	},{
		path: '/eidexperience/:id',
		name: 'eidexperience',
		component: (eidexperience) => require(['@/view/user/eidexperience'], eidexperience),
		meta: {
			title: '编辑项目经验'
		}
	},{
		path: '/players',
		name: 'players',
		component: (players) => require(['@/view/user/players'], players),
		meta: {
			title: '添加团队成员'
		}
	},{
		path: '/editplayers/:id',
		name: 'editplayers',
		component: (editplayers) => require(['@/view/user/editplayers'], editplayers),
		meta: {
			title: '修改团队成员'
		}
	},{
		path: '/educational',
		name: 'educational',
		component: (educational) => require(['@/view/user/educational'], educational),
		meta: {
			title: '教育经历'
		}
	},{
		path: '/eideducational/:id',
		name: 'eideducational',
		component: (eideducational) => require(['@/view/user/eideducational'], eideducational),
		meta: {
			title: '编辑教育经历'
		}
	},{
		path: '/work',
		name: 'work',
		component: (work) => require(['@/view/user/work'], work),
		meta: {
			title: '工作经历'
		}
	},{
		path: '/eidwork/:id',
		name: 'eidwork',
		component: (eidwork) => require(['@/view/user/eidwork'], eidwork),
		meta: {
			title: '编辑工作经历'
		}
	},{
		path: '/coupons',
		name: 'coupons',
		component: (coupons) => require(['@/view/user/coupons'], coupons),
		meta: {
			title: '我的优惠券'
		}
	},{
		path: '/test',
		name: 'test',
		component: (test) => require(['@/components/test'], test),
		meta: {
			title: '测试请勿删'
		}
	},{
		path: '/comment/:uid',
		name: 'comment',
		component: (comment) => require(['@/components/comment'], comment),
		meta: {
			title: '查看评价'
		}
	}
  ]
})
