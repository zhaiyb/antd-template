import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('demoStore')
@observer
class index extends Component {
  componentDidMount() {
    const { demoStore } = this.props;
    demoStore.fetchList();
  }

  render() {
    const { demoStore } = this.props;
    const { todoList } = demoStore;
    return (
      <ul>
        {
          todoList.map((item) => {
            const { id, name } = item;
            return <li key={id}>{name}</li>;
          })
        }
      </ul>
    );
  }
}

export default index;
