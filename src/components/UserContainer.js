import React from "react";
import UserCard from "./UserCard";

class UserContainer extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (

            <section className="userContainer">
                <h1>GitHub User Profile</h1>
                <UserCard userData={this.props.userData}/>
            </section>

        )
    }
}

export default UserContainer;