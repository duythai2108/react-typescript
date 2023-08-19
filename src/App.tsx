import { useState } from "react";
import "./App.css";

const reviews = [
  {
    name: "Evondev",
    image: "",
    stars: 5,
    premiumUser: true,
    date: "05/09/2022",
  },
  {
    name: "CharkaUI",
    image: "",
    stars: 4,
    premiumUser: false,
    date: "03/08/2022",
  },
  {
    name: "React Query",
    image: "",
    stars: 3,
    premiumUser: false,
    date: "04/08/2022",
  },
];

// const obj: {} = {}

// union type
function App() {
  const user: {
    firstName: string;
    lastName: string;
    age: number;
    isStudent: boolean;
    school: (string | number)[];
    scores: number[];
  } = {
    firstName: "Nguyen",
    lastName: "Duy Thai",
    age: 22,
    isStudent: false,
    school: [
      "FPT University",
      "Ton Duc Thang University",
      "RMIT University",
      35,
    ],
    scores: [10, 9, 8],
  };
  const [count, setCount] = useState(0);
  function displayReview(
    totalReviews: number,
    name?: string,
    premium?: boolean
  ) {
    return (
      <>
        Review total <strong>{totalReviews}</strong> | Last reviewed by{" "}
        <strong>{name}</strong> {premium ? "⭐️" : ""}
      </>
    );
  }
  // optional ? :khong bat buoc
  // name?: string thuoc param ko bat buoc truyen vao
  return (
    <div>
      <div className="review">
        <div className="review-image">
          <img src="https://source.unsplash.com/random" alt="" />
        </div>
        <div className="review-info">
          {displayReview(
            reviews.length,
            reviews[0].name,
            reviews[0].premiumUser
          )}
          {user.school[0]}
        </div>
      </div>
    </div>
  );
}

export default App;
