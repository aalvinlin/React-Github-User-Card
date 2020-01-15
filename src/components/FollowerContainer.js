import React from "react";
import FollowerCard from "./FollowerCard";

class FollowerContainer extends React.Component {

    render() {
        
        let followerData = this.props.followerData;

        let pairedFollowerData = [];

        for (let i = 0; i < followerData.length; i += 2)
        {
            pairedFollowerData.push([followerData[i], followerData[i + 1]])
        }

        {console.log("In FollowerContainer: ", followerData)}

        return (

            <section className="followerContainer">
                <h2>Followers</h2>

                {
                    pairedFollowerData.map((follower, id) => {

                        return (
                            <div className="followerPair" key={"followerPair" + id}>
                                <FollowerCard key={"follower" + (2 * id)} id={id} follower={follower[0]} />

                                {/* if there is an odd number of followers, return an empty div */}

                                {
                                    follower[1] ? <FollowerCard key={"follower" + (2 * id + 1)} id={id} follower={follower[1]} />
                                    :
                                    <></>
                                }
                            </div>
                        )

                })}

            </section>

        )
    }
}

export default FollowerContainer;