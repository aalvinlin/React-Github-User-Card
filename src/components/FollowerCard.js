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

                {this.props.orientation === "right" ?

                <div className="nameAndImg">
                    <h3><a href={"/" + follower.login}>{follower.login}</a></h3>
                    {/* <Link to={"/user/" + follower.login}>(View Profile)</Link> */}
                    <img src={follower["avatar_url"]} />
                </div>

                :

                <div className="nameAndImg">
                    
                    {/* <Link to={"/user/" + follower.login}>(View Profile)</Link> */}
                    <img src={follower["avatar_url"]} />
                    <h3><a href={"/" + follower.login}>{follower.login}</a></h3>
                </div>
                }


            </div>
        )
    }
}

export default FollowerCard;