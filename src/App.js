import { BrowserRouter, Route } from "react-router-dom";
import Instruction from './Screen/Instructions'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={Instruction} />
      </BrowserRouter>
    </div>
  );
}

export default App;
