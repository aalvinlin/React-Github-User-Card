import React from "react";
import { withRouter } from "react-router";
import axios from "axios";

import StarBackground from "./components/StarBackground";

import UserContainer from "./components/UserContainer";
import FollowingContainer from "./components/FollowingContainer";
import FollowerContainer from "./components/FollowerContainer";

import "./app.css";

class GitHubUser extends React.Component {

  constructor() {
    super();

    console.log("In GitHubUser constructor...");

    this.state = {
      username: "aalvinlin",
      userData: [],
      followerData: []
    };

  }

  componentDidMount() {

    console.log(this.props.match.params.login);

    let username = this.props.match.params.login;

    if (this.props.match.params.login)
      { this.setState({username: username}); }
    else
      { username = "aalvinlin"; }

    // get user info
    axios
    .get("https://api.github.com/users/" + username)
    .then((response) => {

      this.setState({ userData: response.data })

    })
    .catch((response) => {
      console.log("Error:", response)
    })

    // // get info for the user's followers
    axios
    .get("https://api.github.com/users/" + username + "/followers")
    .then((response) => {

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

    return (

      <div className="content">

        <StarBackground />

        <UserContainer userData={this.state.userData}/>

        <FollowerContainer followerData={this.state.followerData}/>
        
      </div>
    )
  }

}

export default withRouter(GitHubUser);