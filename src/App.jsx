import React from "react";
import Button from "./Components/Button";
import ProfileCard from "./Components/ProfileCard";
import Heading from "./Components/Heading";
import CupCakes from "./Components/CupCakes";
import CupCakesCard from "./Components/CupCakesCard";

const App = () => {
// use this for mapping of large items
  const cupElements = CupCakes.map((cake) => (
   < CupCakesCard flavor={cake.flavor} price={cake.price} />
  ))
  return (
    <>
    {cupElements}
    
    {/* use this for mapping of short items */}
     {/* {CupCakes.map((cake) => (
 <CupCakesCard flavor={cake.flavor} price={cake.price} />
     )) } */}

      {/* <Button />
      <ProfileCard />
      <Heading /> */}
    </>
  );
};

export default App;
