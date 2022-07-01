import DATA from "../../data.json";
import "./Persongroup.css"
const Persongroup = ()=> {
    const groupNames = DATA.reduce((result,item) =>{
        result[item.group]=[]
        return result},
        {});
        Object.keys(groupNames).forEach(group =>{
          const findStudents=DATA.filter(student =>
          student.group == group);
          console.log(findStudents)
          groupNames[group]=findStudents})
        console.log(groupNames);

    return (
        <div className="groups">{groupNames}</div>
    )
}
export default Persongroup;