import React from 'react';
import { HomeStore } from 'src/pages/Home/store';
import { inject, observer } from 'mobx-react';

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
        <button type="button" onClick={() => HomeStore.plus()}>++++++</button>
        <button type="button" onClick={() => HomeStore.reduce()}>----</button>
      </div>
    );
  }
}

export default Home;