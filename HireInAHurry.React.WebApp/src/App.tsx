import React from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Layout from "./components/common/layout/Layout";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./Redux/store/configureStore";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Router>
        <Provider store={store}>
          <Layout>
            <AppRoutes />
          </Layout>
        </Provider>
      </Router>
    </>
  );
}

export default App;
