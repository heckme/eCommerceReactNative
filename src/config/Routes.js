import React, {Component} from "react";
import {Router, Scene} from "react-native-router-flux";

import Dashboard from "./../screens/Dashboard";
import ProductCatlog from "./../screens/ProductCatlog";
import ProductDetails from "./../screens/ProductDetails";
import CartDetails from "./../screens/CartDetails";
import AddressDetails from "./../screens/AddressDetails";
import ConfirmOrder from "./../screens/ConfirmOrder";
import UserProfile from "./../screens/UserProfile";
import MyOrders from "./../screens/MyOrders";
import Login from "./../screens/Login";
import Register from "./../screens/Register";

export default class Routes extends Component<{}> {

		render() {
				const {isLoggedin} = this.props;
				return(
						<Router>
								<Scene>
										<Scene key="auth" hideNavBar={true} initial={!isLoggedin}>
												<Scene key="login" component={Login} title="Login" />
												<Scene key="signup" component={Register} title="Register" />
										</Scene>
										<Scene key="app" hideNavBar={true} initial={isLoggedin}>
												<Scene key="dashboard" component={Dashboard} title="Dashboard" />
												<Scene key="productCatlog" component={ProductCatlog} title="Product Catlog" />
												<Scene key="productDetails" component={ProductDetails} title="Product Details" />
												<Scene key="cartDetails" component={CartDetails} title="Cart Details" />
												<Scene key="addressDetails" component={AddressDetails} title="Address Details" />
												<Scene key="confirmOrder" component={ConfirmOrder} title="Confirm Order" />
												<Scene key="userProfile" component={UserProfile} title="User Profile" />
												<Scene key="myOrders" component={MyOrders} title="My Orders" />
										</Scene>
								</Scene>
						</Router>
				);
		}
}
