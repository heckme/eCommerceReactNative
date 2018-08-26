import React, {Component} from "react";
import {Router, Scene} from "react-native-router-flux";

import Dashboard from "./../screens/Dashboard";
import ProductDetails from "./../screens/ProductDetails";
import CartDetails from "./../screens/CartDetails";
import AddressDetails from "./../screens/AddressDetails";

export default class Routes extends Component<{}> {

		render() {

				return(
						<Router>
								<Scene>
										<Scene key="app" hideNavBar={true} initial={true} >
												<Scene key="dashboard" component={Dashboard} title="Dashboard" />
												<Scene key="productDetails" component={ProductDetails} title="ProductDetails" />
												<Scene key="cartDetails" component={CartDetails} title="CartDetails" />
												<Scene key="addressDetails" component={AddressDetails} title="AddressDetails" />
										</Scene>
								</Scene>
						</Router>
				);
		}
}
