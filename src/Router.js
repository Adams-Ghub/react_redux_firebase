import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import App from './App';
import EditForm from './Components/EditForm'

const Router =()=>{

    return(
    <BrowserRouter>
       
        <Route exact={true} path="/" component={App}/> 
        <Route exact={true} path ="/edit/:id" component={EditForm} />
    </BrowserRouter>
    )
}
export default Router 