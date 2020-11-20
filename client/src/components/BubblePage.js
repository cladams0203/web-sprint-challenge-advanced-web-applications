import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFetch } from "../utils/apiHook";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [res] = useFetch("/api/colors");
  console.log(colorList);
  useEffect(() => {
    res && setColorList(res.data);
  }, [res]);
  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
