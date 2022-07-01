import DATA from "../../data.json";
import "./Students.css"
const Students = ()=> {
   const students = DATA.filter(person => !person.assistant);
     console.log(students);
    return(
        <h1 className="nonCard">{students}</h1>
    )
}
export default Students;