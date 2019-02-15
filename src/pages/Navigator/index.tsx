import React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import Home from '../Home';
import Video from '../Video';
import Myself from '../Myself';
import Friends from '../Friends';
import Profile from '../Profile';
import axios from 'axios';

import http from 'utils/http';

import './style.scss';

class Navigator extends React.Component {
  componentDidMount() {
    document.title = "首页";

    http.get('http://localhost:3000/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA').then(res => {
      console.log(res);
    })
  }

  render() {
    return (
      <div className="nav_container">
        <div className="content">
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route path="/home" component={Home} />
          <Route path="/video" component={Video} />
          <Route path="/myself" component={Myself} />
          <Route path="/friends" component={Friends} />
          <Route path="/profile" component={Profile} />
        </div>

        <div className="nav">
          <NavLink className="nav_item home" activeClassName="active" to="/home">首页</NavLink>
          <NavLink className="nav_item video" activeClassName="active" to="/video">视频</NavLink>
          <NavLink className="nav_item myself" activeClassName="active" to="/myself">我的</NavLink>
          <NavLink className="nav_item friend" activeClassName="active" to="/friends">朋友</NavLink>
          <NavLink className="nav_item profile" activeClassName="active" to="/profile">账号</NavLink>
        </div>
      </div>
    )
  }
}

export default Navigator;
