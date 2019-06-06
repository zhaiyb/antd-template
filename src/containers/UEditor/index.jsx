import React, { Component } from 'react';
// import { inject, observer } from 'mobx-react';

import './index.less';

class index extends Component {
  componentDidMount() {
    const ue = window.UE.getEditor('container');
    // 对编辑器的操作最好在编辑器ready之后再做
    ue.ready(() => {
      // 设置编辑器的内容
      ue.setContent('hello');
      // 获取html内容，返回: <p>hello</p>
      const html = ue.getContent();
      console.log(html);
      // 获取纯文本内容，返回: hello
      const txt = ue.getContentTxt();
      console.log(txt);
    });
    this.ue = ue;
  }

  handleClick = () => {
    console.log(this.ue.getContent());
  }

  render() {
    return (
      <div>
        <div id="container" />
        <button onClick={this.handleClick}>获取内容</button>
      </div>
    );
  }
}

export default index;
