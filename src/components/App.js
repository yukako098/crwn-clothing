import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePages from "../pages/homepages/HomePages";

import "./App.scss";

const HatsPage = () => (
    <div>
        <h1>hatspage</h1>
    </div>
);

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePages} />
                <Route path="/hats" component={HatsPage} />
            </Switch>
        </div>
    );
};

export default App;
