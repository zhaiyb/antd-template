/**
 * @author 翟懿博
 * @email yibo.zhai@okcoin-inc.net
 * @create date 2019-07-27 17:43:46
 * @modify date 2019-07-27 17:43:46
 * @desc [违规外联监控]
 */

import React, { Component } from 'react';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '违规外联监控',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div className="module out-reach">
        {name}
      </div>
    );
  }
}

export default index;
