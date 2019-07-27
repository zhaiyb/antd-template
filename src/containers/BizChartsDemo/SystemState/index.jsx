/**
 * @author 翟懿博
 * @email yibo.zhai@okcoin-inc.net
 * @create date 2019-07-27 17:43:46
 * @modify date 2019-07-27 17:43:46
 * @desc [系统运行状态]
 */

import React, { Component } from 'react';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '系统运行状态',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div className="module system-container">
        {name}
      </div>
    );
  }
}

export default index;
