import React, {Component} from "react";
import {Router, Scene} from "react-native-router-flux";

import Dashboard from "./../screens/Dashboard";

export default class Routes extends Component<{}> {

		render() {

				return(
						<Router>
								<Scene>
										<Scene key="app" hideNavBar={true} initial={true} >
												<Scene key="dashboard" component={Dashboard} title="Dashboard" />
										</Scene>
								</Scene>
						</Router>
				);
		}
}
