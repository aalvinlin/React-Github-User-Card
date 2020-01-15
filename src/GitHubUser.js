import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import StarBackground from "./components/StarBackground";

import UserContainer from "./components/UserContainer";
import FollowingContainer from "./components/FollowingContainer";
import FollowerContainer from "./components/FollowerContainer";

import "./app.css";

class GitHubUser extends React.Component {

  constructor() {
    super();

    this.state = {
      username: "aalvinlin",
      userData: [],
      followerData: []
    };

  }

  componentDidMount() {

    // get user info
    axios
    .get("https://api.github.com/users/" + this.state.username)
    .then((response) => {

      console.log(response.data);

      this.setState({ userData: response.data })

    })
    .catch((response) => {
      console.log("Error:", response)
    })

    // // get info for the user's followers
    axios
    .get("https://api.github.com/users/" + this.state.username + "/followers")
    .then((response) => {

      console.log(response.data);

      this.setState({ followerData: response.data });
    })
    .catch((response) => {
      console.log("Error:", response)
    })

    // // get info for the peple the user is following
    // axios
    //   .get("https://api.github.com/users/" + this.state.username + "/following")
    //   .then((response) => {

    //     console.log(response.data);

    //     this.setState({ followingData: response.data.map(user => user.login) })

    //   })

  }


  render() {

    console.log("followerData in render():", this.state.followerData);

    return (

      <div className="content">

        <StarBackground />

        <UserContainer userData={this.state.userData}/>

        <FollowerContainer followerData={this.state.followerData}/>
        
      </div>
    )
  }

}

export default GitHubUser;