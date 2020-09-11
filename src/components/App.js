import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ThankYou from "./ThankYou";
import Form from "./Form";
import FileUploader from "./FileUploader";

function App() {
 
  return (
    <Router>
      <Route exact path="/" component={FileUploader} />
      <Route exact path="/form/:id" component={Form} />
      <Route exact path="/thanks" component={ThankYou} />
    </Router>
  );
}

export default App;
