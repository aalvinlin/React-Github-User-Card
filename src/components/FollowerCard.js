import React from "react";
import Link from "react-router-dom";

class FollowerCard extends React.Component {

    render() {

        let follower = this.props.follower;

        let zigZagAlign = "";

        // odd numbers in the center
        if (this.props.id % 2 === 1)
            { zigZagAlign = "zigZagCenter"; }

        // multiples of 4 are right-aligned
        else if (this.props.id % 4 === 0)
            { zigZagAlign = "zigZagRight"; }

        // multiples of 2 are left-aligned
        else
            { zigZagAlign = "zigZagLeft"; }


        return (

            <div className={"followerCard " + zigZagAlign}>
                {/* <div className="nameAndImg" style={{marginRight: (follower.id / 30) * 100 + "%"}}> */}

                {/* <div className="nameAndImg" style={{marginRight: (this.props.id / 3) * 50 + "%"}}> */}
                <div className="nameAndImg">
                    <div>
                        <h3>{follower.name}</h3>
                        <h3>(<a href={"/user/" + follower.login}>{follower.login}</a>)</h3>
                        {/* <Link to={"/user/" + follower.login}>(View Profile)</Link> */}
                        {/* <br />
                        <a href={"/user/" + follower.login}>(View Profile)</a> */}
                    </div>
                    {/* <img src={follower["avatar_url"]} /> */}
                    <img src="https://avatars2.githubusercontent.com/u/57117545?v=4" />
                </div>
            </div>

            // <div>
            //     <div className="nameAndImg">
            //         <div>
            //         <h2>{follower.name} (<a href={"https://github.com/" + follower.login} target="_blank" >{follower.login}</a>)</h2>
            //         </div>
            //         <img src={follower["avatar_url"]} />
            //     </div>
            //     <div className="statsAndBio">
            //         <div>
            //             <p className="userRepos">{follower.public_repos} public repositories</p>
            //             <p className='userLocation'>
            //                 {follower.location ? follower.location : "Location unknown"}
            //             </p>
            //             <p className="userFollowers">{follower.followers} followers</p>
            //             <p className="userFollowing">{follower.following} following</p>
            //         </div>
            //         <p className='userBio'>{(follower.bio ? follower.bio : "bio goes here...")}</p>
            //     </div>
            // </div>

        )
    }
}

export default FollowerCard;