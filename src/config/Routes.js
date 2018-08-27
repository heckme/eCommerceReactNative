import React, {Component} from "react";
import {Router, Scene} from "react-native-router-flux";

import Dashboard from "./../screens/Dashboard";
import ProductCatlog from "./../screens/ProductCatlog";
import ProductDetails from "./../screens/ProductDetails";
import CartDetails from "./../screens/CartDetails";
import AddressDetails from "./../screens/AddressDetails";
import ConfirmOrder from "./../screens/ConfirmOrder";

export default class Routes extends Component<{}> {

		render() {

				return(
						<Router>
								<Scene>
										<Scene key="app" hideNavBar={true} initial={true} >
												<Scene key="dashboard" component={Dashboard} title="Dashboard" />
												<Scene key="productCatlog" component={ProductCatlog} title="ProductCatlog" />
												<Scene key="productDetails" component={ProductDetails} title="ProductDetails" />
												<Scene key="cartDetails" component={CartDetails} title="CartDetails" />
												<Scene key="addressDetails" component={AddressDetails} title="AddressDetails" />
												<Scene key="confirmOrder" component={ConfirmOrder} title="ConfirmOrder" />
										</Scene>
								</Scene>
						</Router>
				);
		}
}
