import { Route } from "react-router-dom";
import DefaultHOC from "./HOC/DefaultHOC";
import MovieHOC from "./HOC/MovieHOC";

//pages
import HomePage from "./pages/Home.Page";
import Movie from "./pages/Movie.Page";
function App() {
  return (
    // <>
    //   <Route path="/" exact component={Name} />
    //   <Route path="/movie" exact component={Name2} />
    // </>
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie}/>
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




