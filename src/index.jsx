import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color='blue' maxRating={10} onSetRating={setMovieRating} />
//       <p>You got {movieRating} Stars</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
    {/* <StarRating size='32' color='red' className='test' defaultRating={0} />
    <Test /> */}
  </React.StrictMode>
);
