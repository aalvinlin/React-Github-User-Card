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

    let username = this.props.match.params.login;

    if (!username)
      { username = "aalvinlin"; }
    
    this.setState({username: username});

    // get user info
    axios
    .get("https://api.github.com/users/" + username)
    .then((response) => {

      console.log(response);

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
  }

  // just added in...couldn't test because API request exceeded
  // shouldComponentUpdate() {

  //   console.log("should component update?", (this.props.match.params.login !== this.state.username))

  //   return (this.props.match.params.login !== this.state.username)
  // }

  render() {

    console.log("rendering...", "this.state.username:", this.state.username, "params.login:", this.props.match.params.login);

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