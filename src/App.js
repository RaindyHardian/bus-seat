import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import SeatBuilderPage from "./routes/SeatBuilderPage";
import SeatPickerPage from "./routes/SeatPickerPage"

function App() {
  return (
    <ChakraProvider resetCSS={false}>
      <Router>
        <Switch>
          <Route exact path="/" component={SeatBuilderPage} />
          <Route exact path="/seat-picker" component={SeatPickerPage}/>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
