import React from "react";
import "./App.css";
import CMToast from "./lib/cmToast";
import ApplicationComponent from "./lib/applicationComponent";
import SmsAuth from "./lib/smsAuth/smsAuth";

import "bootstrap/dist/css/bootstrap.min.css";
import { GET_USER_PROFILE } from "./lib/service";
import { Provider } from "./context/provider";

export default class App extends ApplicationComponent {
  state = { show: true };

  componentDidMount() {
    this.serviceExecutor
      .execute(GET_USER_PROFILE())
      .then((result) => console.log(result));
  }

  render() {
    return (
      <Provider>
        <SmsAuth mock />
        <CMToast show={this.state.show} onClose={this.onCloseToast} />
      </Provider>
    );
  }

  onCloseToast = () => {
    console.log("onclose");
    this.setState({
      show: false,
    });
  };
}
