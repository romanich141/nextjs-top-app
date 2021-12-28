import React from "react";
import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";

export default function Home(): JSX.Element {
  return (
    <div>
        <Htag 
          tag="h1"
          children="text"
        />

        <Button 
          onClick={ () => console.log("click") }
          appearance="primary"
          arrow="right"
        >Primary</Button>
        <Button 
          appearance="ghost"
          arrow="down"
        >
          Ghost
        </Button>
    </div>
  );
}
