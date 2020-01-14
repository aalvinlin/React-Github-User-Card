import React from "react";

class StarBackground extends React.Component {

    constructor() {

        super();

        const colors = ["#FFFFFF", "#CCCCCC", "#FFFF99", "#FFCC00"];
        this.state = { stars: [] };

        for (let i = 0; i < 100; i+= 1)
        {
            let size = (Math.floor(Math.random() * 2) + 1) + "px";

            this.state.stars.push(
                {
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                    top: Math.floor(Math.random() * 100) + "%",
                    left: Math.floor(Math.random() * 100) + "%",
                    width: size,
                    height: size
                }
            )
        }

    }

    render() {

        return (

            <div className="starBackground">
                {this.state.stars.map((star, id) =>
                    
                    <div className="star" key={"star" + id} style={star}></div>
                    
                    )}
                
            </div>

        )
    }
}

export default StarBackground;