import React from "react";
import UserCard from "./UserCard";

class UserContainer extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (

            <section className="userContainer">
                <UserCard userData={this.props.userData}/>
            </section>

        )
    }
}

export default UserContainer;