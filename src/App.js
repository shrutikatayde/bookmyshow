import { Route } from "react-router-dom";
import DefaultHOC from "./HOC/DefaultHOC";

//Component
import Temp from "./components/temp";
function App() {
  return (
    // <>
    //   <Route path="/" exact component={Name} />
    //   <Route path="/movie" exact component={Name2} />
    // </>
    <>
      <DefaultHOC path="/" exact component={Temp}/>
    </>
  );
}

export default App;

// importance of spread operator
// old method
// const shrutika = {
//   name: "shrutika",
//   dob: 2003
  
// };

// const student = {
//   name: "shrutika",
//   dob: 2003,
//   goodStudent: true
// };

// // const student = shrutika;
// student.goodStudent = true;

//Spread operator

// const shrutika = {
//   name: "shrutika",
//   dob: 2003
// };

// const student={...shrutika, goodStudent:true}




