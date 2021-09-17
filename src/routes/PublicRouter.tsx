//Base imports
import React, {useEffect} from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import {productsFetch} from "../store/reducers/public/products";
import {useDispatch} from "react-redux";

// Screens import
import {Home} from "../screens/Home";
import {ItemDescription} from "../screens/ItemDescription";



export const PublicRouter: React.FC = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productsFetch());
    }, [])

    return (

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/product" component={ItemDescription} />

                <Route path="**"><Redirect to="/"/></Route>

            </Switch>
        </BrowserRouter>
    )
}
