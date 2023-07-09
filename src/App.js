import { Route } from "react-router-dom";

//HOC
import DefaultHOC from "./HOC/DefaultHOC";
import MovieHOC from "./HOC/MovieHOC";

//AXIOS
import axios, { Axios } from "axios";// for globally fetching data rather than when each component is rendered.

//pages
import HomePage from "./pages/Home.Page";
import Movie from "./pages/Movie.Page";
import Plays from "./pages/Place.Page"

//axios default settings
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    // <> 
    //   <Route path="/" exact component={Name} />
    //   <Route path="/movie" exact component={Name2} />
    // </>
    <>
      <DefaultHOC path="/" exact component={HomePage} />
      <MovieHOC path="/movie/:id" exact component={Movie} />
      <MovieHOC path="/plays" exact component={Plays} />
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




