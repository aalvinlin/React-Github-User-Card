import React from "react";
import GitHubUser from "./GitHubUser";

import { Route } from "react-router-dom";

class App extends React.Component {

render() {


    console.log("matching...", this.props.match);


    return (

        <>
            <Route exact path="/">
                <GitHubUser />
            </Route>

            <Route path="/:login">
                <GitHubUser />
            </Route>
        </>
    )
}

}

export default App;