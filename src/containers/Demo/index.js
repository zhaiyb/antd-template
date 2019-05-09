import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';


@inject('demoStore')
@observer
class index extends Component {
  render() {
    const { todoList } = this.props;
    return (
      <ul>
        {
          todoList.map((item) => {
            const { id, name } = item;
            return <li key={id}>{name}</li>
          })
        }
      </ul>
    );
  }
}

export default index;