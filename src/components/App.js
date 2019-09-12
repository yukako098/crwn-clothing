import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePages from "../pages/homepages/HomePages";
import Shop from "../pages/shop/Shop";
import Header from "./header/Header";

import "./App.scss";

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePages} />
                <Route path="/shop" component={Shop} />
            </Switch>
        </div>
    );
};

export default App;
