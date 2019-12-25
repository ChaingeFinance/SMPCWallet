import config from '@etc/js/config'
export default {
	error: {
		err_1: '请输入用户名',
		err_2: '长度在 3 到 5 个字符',
		err_3: '请输入密码',
		err_4: '密码只能输入6-20个字母、数字、下划线',
		err_5: '请再次输入密码',
		err_6: '两次输入密码不一致!',
		err_7: '账户已存在',
		err_8: '账户不存在',
	},
	warn: {
		w_1: '请选择账户',
		w_2: '请获取账户',
		w_3: '账户为空！',
		w_4: '请选择模式',
		w_5: '模式不能为空',
		w_6: '',
		w_7: '用户不能为空',
		w_8: '请输入公共账户名称',
		w_9: '长度在 3 到 20 个字符',
		w_10: '',
		w_11: '创建组成功',
		w_12: '数据为空！',
		w_13: '登陆超时，请重新登陆！',
		w_14: '请输入目标地址',
		w_15: '请输入金额'
	},
	success: {
		s_1: '创建成功！',
		s_2: '复制成功',
		s_3: '创建账户请求发送成功！'
	},
	btn: {
		confirm: '确认',
		cancel: '取消',
		login: '登陆',
		register: '注册',
		back: '返回',
		person: '个人账户',
		group: '共管账户',
		unlock: '解锁',
		enter: '转入',
		out: '转出',
		code: '二维码',
		copy: '复制',
		createAccount: '创建共管账户',
		restart: '重置',
		agree: '同意',
		refuse: '拒绝',
		approval: '审批',
		create: '创建',
		newBuild: '新建'
	},
	loading: {
		l_1: '账户获取中……'
	},
	title: {
		walletTitle: '<span>SMPC</span> Wallet',
		login: '登陆账户',
		register: '创建账户',
		gMember: '当前组成员',
		selectNode: '节点选择',
		history: '历史',
		wait: '待办',
		refrsh: '刷新',
		personAccount: '个人账户',
		groupAccount: '共管账户',
		quit: '安全退出',
		createGroup: '创建确认',
		groupNews: '共管账户消息',
		txnsNews: '交易消息'
	},
	label: {
		username: '用户名',
		password: '密码',
		password2: '确认密码',
		coinType: '币种',
		address: '地址',
		balance: '余额',
		action: '操作',
		admins: '管理人',
		self: '自己',
		send: '发送',
		sendAddr: '发送地址',
		assets: '资产',
		amount: '数量',
		date: '日期',
		info: '信息',
		hash: '交易哈希',
		mode: '模式',
		to: '地址',
		value: '数量',
		source: '发起账户',
		from: '从',
		group: '组',
		txnHistory: '交易历史',
		groupHistory: '创建历史'
	},
	state: {
		name: '状态',
		on: '在线',
		off: '离线',
		success: '成功',
		fail: '失败',
		pending: '等待中',
		null: '无',
		new: '新'
	},
	tip: {
		walletTip: '欢迎使用SMPC Wallet 1.0<br>请创建一个钱包或者导入一个钱包',
	}
}
