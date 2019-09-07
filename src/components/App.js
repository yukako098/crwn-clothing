import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePages from "../pages/homepages/HomePages";
import Shop from "../pages/shop/Shop";

import "./App.scss";

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePages} />
                <Route path="/shop" component={Shop} />
            </Switch>
        </div>
    );
};

export default App;
