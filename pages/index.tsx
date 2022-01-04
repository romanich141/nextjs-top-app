import React, { useState } from "react";
import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";
import P from "../components/P/P";
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import { Layout } from "../layout/Layout";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(5);

  return (
    <Layout>
        <Htag tag="h1" children="Текст" />

        <Button 
          appearance="primary"
          arrow="right"
          children="Primary"
        />
        <Button 
          appearance="ghost"
          arrow="down"
          children="Ghost"
        /> 

        <P size="lg">{"Большой текст"}</P>
        <P size="md">{"Средний текст"}</P>
        <P size="sm">{"Маленький текст"}</P>


        <Tag color="ghost">{"Ghost"}</Tag>
        <Tag color="red">{"Red"}</Tag>
        <Tag color="grey">{"Grey"}</Tag>
        <Tag size="md" color="green">{"Green"}</Tag>
        <Tag size="md" color="primary">{"Primary"}</Tag>

        <Rating rating={rating} isEditable setRating={setRating} />
    </Layout>
  );
}
