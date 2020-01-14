import React from "react";

class UserCard extends React.Component {

    constructor() {
        super();
    }

    render() {

        const userData = this.props.userData;
        let firstName = undefined;
        let lastName = undefined;

        if (userData.name)
            {
                [firstName, lastName] = userData.name.split(" ");
            }

        return (

            <div>
    <h2>{userData.name} (<a href="`https://github.com/${userData.login}`" >{userData.login}</a>)</h2>
                <img src={userData["avatar_url"]} />
                <p className="userRepos">{userData.public_repos} public repositories</p>
                {(userData.location ? <p className='userLocation'>From {userData.location}</p> : <></>)}
                {(userData.bio ? <p className='userBio'>{userData.bio}</p> : <></>)}
                <p className="userFollowers">{firstName} has {userData.followers} followers.</p>
                <p className="userFollowing">{firstName} is following {userData.following} other people.</p>


            </div>
        )
    }
}

export default UserCard;