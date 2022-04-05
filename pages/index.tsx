import React, { useState } from "react";
import Button from "../components/Button/Button";
import Htag from "../components/Htag/Htag";
import P from "../components/P/P";
import Tag from "../components/Tag/Tag";
import Rating from "../components/Rating/Rating";
import { withLayout } from "../layout/Layout";
import axios from "axios";
import { GetStaticProps } from "next";
import { MenuItem } from "../interfaces/menu.interface";

const Home = ({ menu, }:HomeProps): JSX.Element => {
  const [rating, setRating] = useState<number>(5);

  return (
    <>
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
        <ul>
          { menu.map((item: MenuItem) => (
            <li key={ item._id.secondCategory }>{ item._id.secondCategory }</li>
          )) }
        </ul>
    </>
  );
};

export default withLayout(Home);

export const getStaticProps:GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu, } = await axios.post<MenuItem[]>(`${ process.env.NEXT_PUBLIC_DOMAIN }/api/top-page/find`, {
    firstCategory,
  });

  return {
    props: {
      menu, 
      firstCategory,
    }
  };
};

interface HomeProps extends Record<string, unknown>{
  menu: MenuItem[],
  firstCategory: number,
}