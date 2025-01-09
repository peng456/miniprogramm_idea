Page({
  data: {
    testString: '',
    regex: '',
    result: ''
  },
  onInputTestString: function(e) {
    this.setData({
      testString: e.detail.value
    });
  },
  onInputRegex: function(e) {
    this.setData({
      regex: e.detail.value
    });
  },
  validate: function() {
    const { testString, regex } = this.data;
    try {
    
      if (!testString || !regex) {
         throw new Error('请输入测试字符串和正则表达式');
      }

        // 提示 testString  regex 内容
        console.log('testString:', testString);
        console.log('regex:', regex);
      const reg = new RegExp(regex);
      const isValid = reg.test(testString);
      if (isValid) {
        this.setData({
          result: '通过校验'
        });
      } else {
        this.setData({
          result: '未通过校验'
        });
      }
    } catch (e) {
      this.setData({
        result: `错误原因: ${e.message}`
      });
    }
  }
});
