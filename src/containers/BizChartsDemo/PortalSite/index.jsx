/**
 * @author 翟懿博
 * @email yibo.zhai@okcoin-inc.net
 * @create date 2019-07-27 17:43:46
 * @modify date 2019-07-27 17:43:46
 * @desc [门户网监管]
 */

import React, { Component } from 'react';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '门户网站监管',
    };
  }

  render() {
    const { name } = this.state;
    return (
      <div className="module portal-container">
        {name}
      </div>
    );
  }
}

export default index;
