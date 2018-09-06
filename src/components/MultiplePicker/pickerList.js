export default function () {
  return [{
    name: 'name', //对应后端字段名
    title: '姓名', //标题
    type: 'text', //类型
    maxlength: 20, //最大长度
    placeholder: '请输入姓名', //默认文案
    value: '', //上传的值
    disabled: false, //是否可修改
    showIcon: false, //是否展示右箭头点击选择
    reg: /^[\u4E00-\u9FA5a-zA-Z_]{2,20}$/, //正则
    regError: '请输入正确姓名', //不匹配正则的错误提示
    error: '请输入姓名', //value为空的错误提示
    isMust: true, //是否必填
  }, {
    name: 'mobile', //对应后端字段名
    title: '手机号', //标题
    type: 'tel', //类型
    maxlength: 11, //最大长度
    placeholder: '请输入手机号码', //默认文案
    value: '', //上传的值
    disabled: false, //是否可修改
    showIcon: false, //是否展示右箭头点击选择
    reg: /^1[3456789]\d{9}$/, //正则
    regError: '请输入正确手机号码', //不匹配正则的错误提示
    error: '请输入手机号码', //错误提示
    isMust: true, //是否必填
  }, {
    name: 'occupation', //对应后端字段名
    title: '职业', //标题
    type: 'choose', //类型
    maxlength: '', //最大长度
    placeholder: '', //默认文案
    value: '', //上传后端的值
    showValue: '', //前端展示的value值
    disabled: false, //是否可修改
    showIcon: true, //是否展示右箭头点击选择
    reg: '', //正则
    regError: '', //不匹配正则的错误提示
    error: '请选择职业', //错误提示
    isMust: true, //是否必填
    slots: [{
      values: [{
        text: '工作1',
        mode: 1
      }, {
        text: '工作2',
        mode: 2
      }, {
        text: '工作3',
        mode: 3
      }, {
        text: '工作4',
        mode: 4
      }],
      defaultIndex: 1
    }]
  }, {
    name: 'gender', //对应后端字段名
    title: '性别', //标题
    type: 'choose', //类型
    maxlength: '', //最大长度
    placeholder: '', //默认文案
    value: '', //上传后端的值
    showValue: '', //前端展示的value值
    disabled: false, //是否可修改
    showIcon: true, //是否展示右箭头点击选择
    reg: '', //正则
    regError: '', //不匹配正则的错误提示
    error: '请选择性别', //错误提示
    isMust: true, //是否必填
    slots: [{
      values: [{
        text: '男',
        mode: 1
      }, {
        text: '女',
        mode: 2
      }, {
        text: '未知',
        mode: 3
      }],
      defaultIndex: 1
    }]
  }, {
    name: 'age', //对应后端字段名
    title: '年龄', //标题
    type: 'choose', //类型
    maxlength: '', //最大长度
    placeholder: '', //默认文案
    value: '', //上传后端的值
    showValue: '', //前端展示的value值
    disabled: false, //是否可修改
    showIcon: true, //是否展示右箭头点击选择
    reg: '', //正则
    regError: '', //不匹配正则的错误提示
    error: '请选择', //错误提示
    isMust: true, //是否必填
    slots: [{
      values: [{
        text: '年龄1',
        mode: 1
      }, {
        text: '年龄2',
        mode: 2
      }, {
        text: '年龄3',
        mode: 3
      }, {
        text: '年龄4',
        mode: 4
      }],
      defaultIndex: 1
    }]
  }, {
    name: 'starttime', //对应后端字段名
    title: '开始时间', //标题
    type: 'date', //类型
    maxlength: '', //最大长度
    placeholder: '', //默认文案
    value: '', //上传后端的值
    showValue: '', //前端展示的value值
    disabled: false, //是否可修改
    showIcon: true, //是否展示右箭头点击选择
    startDate: new Date(),
    reg: '', //正则
    regError: '', //不匹配正则的错误提示
    error: '请选择开始时间', //错误提示
    isMust: true, //是否必填
  }, {
    name: 'endtime', //对应后端字段名
    title: '结束时间', //标题
    type: 'datetime', //类型
    maxlength: '', //最大长度
    placeholder: '', //默认文案
    value: '', //上传后端的值
    showValue: '', //前端展示的value值
    startDate: new Date(new Date().getTime() - 20 * 365 * 24 * 60 * 60 * 1000 - 5 * 24 * 60 * 60 * 1000),
    endDate: new Date(new Date().getTime() + 20 * 365 * 24 * 60 * 60 * 1000 + 5 * 24 * 60 * 60 * 1000),
    disabled: false, //是否可修改
    showIcon: true, //是否展示右箭头点击选择
    reg: '', //正则
    regError: '', //不匹配正则的错误提示
    error: '请选择结束时间', //错误提示
    isMust: true, //是否必填
  }, {
    name: 'remark', //对应后端字段名
    title: '', //标题
    type: 'textarea', //类型
    maxlength: 200, //最大长度
    placeholder: '备注', //默认文案
    value: '', //上传的值
    disabled: false, //是否可修改
    showIcon: false, //是否展示右箭头点击选择
    reg: '', //正则
    regError: '请输入正确姓名', //不匹配正则的错误提示
    error: '请输入姓名', //错误提示
    isMust: false, //是否必填
  }]
}
