import React from 'react';
import { HomeStore } from 'src/pages/Home/store';
import { inject, observer } from 'mobx-react';
import { toJS } from 'mobx';

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

  componentDidMount() {
    const { HomeStore } = this.injected;
    HomeStore.getRecommended();
  }

  render() {
    const { HomeStore } = this.injected;
    const recommended = toJS(HomeStore.recommended);
    return (
      <div>
        {recommended.map((item, i) => (
          <div key={i}>
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;