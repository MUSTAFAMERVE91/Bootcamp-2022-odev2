import Assistants from "./compenents/Assistants/Assistants";
import "./App.css"
import Students from "./compenents/Students/Students";
import Persongroup from "./compenents/Persongroup/Persongroup";
const App = () => {

  return (
    <div className="app">
      <Assistants></Assistants>
      <Students></Students>
      <Persongroup></Persongroup>
      </div>

  );
}

export default App;