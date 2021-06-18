import { BrowserRouter, Route } from "react-router-dom";
import Instruction from './Screen/Instructions'
import TestConduction from './Screen/TestConduction'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Instruction} />
        <Route exact path="/conduction" component={TestConduction} />
      </BrowserRouter>
    </div>
  );
}

export default App;
