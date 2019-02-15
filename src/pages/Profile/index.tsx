import React from 'react';

class Profile extends React.Component {
  componentDidMount() {
    document.title = "个人设置"
  }

  render() {
    return (
      <div>Profile</div>
    )
  }
}

export default Profile;
