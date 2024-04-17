import React from "react";
import { useLocation } from "react-router-dom";

const Contact: React.FC = () => {
  const location = useLocation();

  const data = location?.state?.data;
  const id = location?.state;
  const path_name = location?.pathname;
  const param = location?.search
  const hash = location.hash
  console.log(hash);

  return (
    <>
      <h1>Contact</h1>
      <div>{param}</div>
      <div>#: {hash}</div>
      <div>{id?.id}</div>
      {path_name === "/home/contact" && <div style={{color:"red"}}>ชื่อ:{data?.name} </div> }
      <div>ชื่อ:{data?.name}</div>
      <div>อายุ: {data?.age}</div>
      <div>หน้า: {data?.dev_of}</div>
    </>
  );
};
export default Contact;
