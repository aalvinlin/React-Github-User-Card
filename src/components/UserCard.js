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

            (userData.length === 0) ?

                <div>
                    <div className="nameAndImg">
                        <div>
                        <h1>GitHub User Profile</h1>
                        <h2>Loading User Info...</h2>
                        </div>
                    </div>
                </div>
            
            :
            
            (
        
            <div>
                <div className="nameAndImg">
                    <div>
                    <h1>GitHub User Profile</h1>
                    <h2>{userData.name} (<a href={"https://github.com/" + userData.login} target="_blank" >{userData.login}</a>)</h2>
                    </div>
                    <img src={userData["avatar_url"]} />
                </div>
                <div className="statsAndBio">
                    <div>
                        <p className="userRepos">{userData.public_repos} public repositories</p>
                        <p className='userLocation'>
                            {userData.location ? userData.location : "Location unknown"}
                        </p>
                        <p className="userFollowers">{userData.followers} followers</p>
                        <p className="userFollowing">{userData.following} following</p>
                    </div>
                    <p className='userBio'>{(userData.bio ? userData.bio : "bio goes here...")}</p>
                </div>
            </div>
            )
        )

    }
}

export default UserCard;