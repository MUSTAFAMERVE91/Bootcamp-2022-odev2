
import DATA from "../../data.json";
import "/.Assistants.css"
const Assistants = ()=> {
   const assistants = DATA.filter(person=>person.assistant);
     console.log(assistants);
    return(
        <h1 className="card">{assistants}</h1>
    )
}
export default Assistants;