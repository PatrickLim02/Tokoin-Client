import React, { useState, useEffect } from "react";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

//General Helpers
import { getChartHandle, handleLogin } from "../../helpers/general";

//Components
import Home from "../Home";
import Shop from "../Shop";
import Faq from "../FAQ";
import ProductDetail from "../ProductDetail";
import ConfirmPayment from "../ConfirmPayment";
import MyOrders from "../MyOrders";
import OrderDetail from "../OrderDetail";
import Profile from "../Profile";
import Password from "../Password";
import Refund from "../Refund";
import Footer from "../../components/Footer";
import ConfirmReturn from "../ConfirmReturn";
import ReturnProduct from "../ReturnProduct";
import { styles } from "./styles";
import NavigationItems from "../../components/NavigationsItems";
import Chart from "../ChartScreen";
import NavigationsActions from "../../components/NavigationsActions";
import Register from "../Register";
import Checkout from "../Checkout";
import { ReactComponent as Logo } from "../../assets/svg/logoIcon.svg";

const Navigation = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigationDatas = [
    { url: "/home", label: "Home" },
    { url: "/shop", label: "Shop" },
    { url: "/faq", label: "FAQ" },
  ];
  const navigationsRender = () => {
    return <NavigationItems navigationsData={navigationDatas} />;
  };

  const handleLoginAtRefresh = async () => {
    await handleLogin();
  };

  useEffect(() => {
    handleLoginAtRefresh();
  }, []);

  useEffect(() => {
    getChartHandle();
  }, []);

  return (
    <Router className="general-container bg-dark">
      <div
        className="navigation-container display-flex"
        style={styles.navigationContainer}
      >
        <Logo width="40" />
        {navigationsRender()}
        <NavigationsActions />
      </div>
      <div className="route-container">
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/faq" component={Faq} />
        <Route path="/confirm-payment" component={ConfirmPayment} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/my-orders" component={MyOrders} />
        <Route path="/order-detail/:id" component={OrderDetail} />
        <Route path="/profile" component={Profile} />
        <Route path="/change-password" component={Password} />
        <Route path="/chart" component={Chart} />
        <Route path="/refund" component={Refund} />
        <Route path="/confirm-return" component={ConfirmReturn} />
        <Route path="/return-product" component={ReturnProduct} />
        <Route path="/register" component={Register} />
        <Route path="/checkout" component={Checkout} />
      </div>
    </Router>
  );
};

export default Navigation;
