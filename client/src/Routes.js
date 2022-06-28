import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import SigninSeller from "./pages/SigninSeller";
import SignupSeller from "./pages/SignupSeller";
import SignupType from "./pages/SignupType";
import SignupCustomer from "./pages/SignupCustomer";
//import Type from "./pages/SignupType";
import SigninType from "./pages/SigninType";
import SigninCustomer from "./pages/SigninCustomer";
import AdminLogin from "./pages/AdminLogin";
import ViewUsers from "./pages/ViewUsers";
import AddAdmin from "./pages/AddAdmin";
import ResetPwCustomer from "./pages/ResetPwCustomer";
import ResetPwSeller from "./pages/ResetPwSeller";
import Login from "./pages/seller";
import AddProduct from "./pages/AddProduct";
import ViewProducts from "./pages/ViewProducts";
import EditProduct from "./pages/editProduct";
import ForgetPwCustomer from "./pages/forgetPwCustomer";
import ForgetPwSeller from "./pages/forgetPwSeller";
import Customer from "./pages/Customer";
import Join from "./pages/Join";
import Chat from "./pages/Chat";
function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/signinType'>
          <SigninType />
        </Route>
        <Route exact path='/signupType'>
          <SignupType />
        </Route>
        <Route exact path='/forgetPwCustomer'>
          <ForgetPwCustomer />
        </Route>
        <Route exact path='/forgetPwSeller'>
          <ForgetPwSeller />
        </Route>
        <Route exact path='/resetPwSeller'>
          <ResetPwSeller />
        </Route>
        <Route exact path='/resetPwCustomer'>
          <ResetPwCustomer />
        </Route>
        <Route path='/adminLogin'>
          <AdminLogin />
        </Route>
      </Switch>

      <Switch>
        <Route exact path='/Home'>
          <SignupType />
        </Route>
        <Route path='/signupSeller'>
          <SignupSeller />
        </Route>
        <Route path='/signupCustomer'>
          <SignupCustomer />
        </Route>
      </Switch>

      <Switch>
        <Route exact path='/Home'>
          <SignupType />
        </Route>
        <Route path='/signinSeller'>
          <SigninSeller />
        </Route>
        <Route path='/signinCustomer'>
          <SigninCustomer />
        </Route>
        {/* <Route path='/Customer'>
          <Customer />
        </Route> */}
        {/* <Route path='/Join'>
          <Join />
        </Route>
        <Route path='/Chat'>
          <Chat />
        </Route> */}
      </Switch>
      <Switch>
        {/* <Route path='/Customer'>
          <Customer />
        </Route> */}

        {/* <Route path='/Chat'>
          <Chat />
        </Route> */}
      </Switch>
      <Switch>
        <Route path='/viewUsers'>
          <ViewUsers />
        </Route>
        <Route path='/addAdmin'>
          <AddAdmin />
        </Route>
      </Switch>
      <Switch>
        <Route path='/seller'>
          <Login />
        </Route>
        <Route path='/AddProduct'>
          <AddProduct />
        </Route>
        <Route path='/ViewProducts'>
          <ViewProducts />
        </Route>

        <Route path='/ViewProducts'>
          <Login />
        </Route>
        <Route path='/editProduct'>
          <EditProduct />
        </Route>
      </Switch>
      <Switch>
        <Route path='/addAdmin'>
          <AddAdmin />
        </Route>
      </Switch>
    </div>
  );
}
export default Routes;
