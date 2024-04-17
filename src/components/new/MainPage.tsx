import { FC } from "react";
import { useNavigate } from "react-router-dom";


const MainPage: FC = () => {
    const navigate = useNavigate();
  return (
    <div
      style={{
        borderRadius: "20px",
        padding: "50px 0",
        boxShadow: "0 14px 28px rgb(0 0 0 / 13%), 0 10px 10px rgb(0 0 0 / 4%)",
        margin: "30px 90px",
      }}
    >
      <img src="/src/assets/image2.webp" />
      <h3>ogs Daily News</h3>
      <button
        style={{
          backgroundColor: "#374151",
          color: "#ffffff",
        }}
        onClick={() => {
            navigate("/ogs-new");
          }}
      >
        เข้าสู่เว็บไซต์
      </button>
    </div>
  );
};
export default MainPage;
