import { FC } from "react";
import {  useNavigate } from "react-router-dom";

const Home: FC = () => {
  const data = {
    name: "pang",
    age: "เป็นตัวเลข",
    dev_of: "font_end",
  };
  // const navigator = useNavigate();
  const navigator = useNavigate();

  return (
    <>
      <h1>Home Page</h1>

      <button
        style={{ background: "green", color: "#fff" }}
        onClick={() => navigator("/home/contact?id=2&name=pang", { state: { data: data,id:"pang" } })}
        // onClick={() => navigator("/home/about", { state: { data_all: data ,hello:"word"} })}
      >
        เข้าสู่เว็บไซต์
      </button>
     
    </>
  );
};
export default Home;
