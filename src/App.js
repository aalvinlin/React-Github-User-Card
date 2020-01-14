import React from "react";

import axios from "axios";

import StarBackground from "./components/StarBackground";

import UserContainer from "./components/UserContainer";
import FollowingContainer from "./components/FollowingContainer";
import FollowerContainer from "./components/FollowerContainer";

import "./app.css";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      username: "aalvinlin",
      userData: [],
      followingData: [],
      followerData: []
    }
  }

  componentDidMount() {

    axios
    .get("https://api.github.com/users/" + this.state.username)
    .then((response) => {

      console.log(response.data);

      this.setState({
        userData: response.data
      })

      console.log("updated state in componentDidMount")

    })
  }

  render() {

    return (

      <div className="content">

        <StarBackground />

        <UserContainer userData={this.state.userData}/>
        <FollowingContainer followingData={this.state.followingData}/>
        <FollowerContainer followerData={this.state.followerData}/>
      
      </div>
    )
  }

}

export default App;