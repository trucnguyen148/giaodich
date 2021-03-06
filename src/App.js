import React, { Component } from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import MainPage from './Screens/MainPage';
import LoginRegister from './Screens/LoginRegister';
import Login from './Screens/LoginRegister/Login';
import Register from './Screens/LoginRegister/Register';
import AboutUs from './Screens/AboutUs';
import Terms from './Screens/Terms';

import AddPoint from './Screens/Requests/AddPoint';
import CreateTransaction from './Screens/Requests/CreateTransaction';
import TakeMoneyOut from './Screens/Requests/TakeMoneyOut';

import AccountInformation from './Screens/Account/AccountInformation';
import AccountConfirmation from './Screens/Account/AccountConfirmation';
import PointManagement from './Screens/Account/PointManagement';

// import BasicInformation from './Screens/Account/AccountInformation/BasicInformation';
import Buy from './Screens/Account/AccountInformation/Buy';
import Sale from './Screens/Account/AccountInformation/Sale';
import HistoryPoint from './Screens/Account/AccountInformation/HistoryPoint';


import history from './Routes/history';
import AuthenticatedComponent from './Screens/AuthenticatedComponent';


export default class App extends Component {

  render(){
    
    const DefaultContainer = () => {
      return(
        <>
            <MainPage/>
            {/* <Switch> */}
              <Route path="/aboutus" exact component={AboutUs}/>
              <Route path="/terms" exact component={Terms}/>
              <AuthenticatedComponent>
                <Route path="/account" exact component={AccountInformation}/>
                <Route path="/accountconfirmation" exact component={AccountConfirmation}/>
                <Route path="/pointmanagement" exact component={PointManagement}/>
                <Route path="/addpoint" exact component={AddPoint}/>
                <Route path="/createtransaction" exact component={CreateTransaction}/>
                <Route path="/takemoney" exact component={TakeMoneyOut}/>
                <Route path="/account/buy" exact component={Buy}/>
               <Route path="/account/sale" exact component={Sale}/>
                <Route path="/account/historyPoint" exact component={HistoryPoint}/>
             {/* <Route path="/account/" exact component={BasicInformation}/> */}
             {/* <Route component={SubNav}/> */}
             
              </AuthenticatedComponent>
            {/* </Switch> */}
        </>
      )
    }
    
    return(
        <Router history={history}>
            <Switch>
               <Route path="/" exact component={LoginRegister}/>
               <Route path="/login" component={Login} />
               <Route path="/register" exact component={Register}/>
                <Route component={DefaultContainer}/>
            </Switch>
        </Router>
        
    )
}
}


