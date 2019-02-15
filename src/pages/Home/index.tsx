import React from 'react';
import { HomeStore } from 'src/pages/Home/store';
import { inject, observer } from 'mobx-react';
import { Button } from 'antd-mobile';

interface Props {}
interface InjectedProps extends Props {
  HomeStore: HomeStore
}

@inject('HomeStore')
@observer
class Home extends React.Component<Props, any> {
  get injected() {
    return this.props as InjectedProps;
  }

  render() {
    const { HomeStore } = this.injected;
    return (
      <div>
        <div>{HomeStore.count}</div>

        <Button onClick={() => HomeStore.plus()}>++++++</Button>
        <Button type="warning" onClick={() => HomeStore.reduce()}>----</Button>
      </div>
    );
  }
}

export default Home;