import { FC } from "react";
import NotFoundImg from "@assets/Group 1.png"
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
  const navigator = useNavigate();
  return (
    <div style={{margin: "50px 90px"}}>
      <img src={NotFoundImg} />
      <div>
      <button onClick={()=>navigator("/ogs-new")} style={{background:"#213547",color:"#fff"}}>กลับสู่หน้าหลัก</button>
      </div>
    </div>
  );
};
export default NotFound;
