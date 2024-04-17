import { FC, useEffect, useState } from "react";
import { data_new } from "@new/HomePage";
import { useParams,useNavigate } from "react-router-dom";

type DataAllNew = {
  id: number;
  name: string;
  news_type: {
    id: number;
    headline: string;
    content: string;
    date: string;
    time: string;
    category: string;
    publisher: string;
  }[];
};

const AllNew: FC = () => {
  const { id } = useParams();
  const [dataNew, setDataNew] = useState<DataAllNew[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const news = data_new[0].type_new.filter((item) => item.id === Number(id));
    setDataNew(news);
  }, [id]);

  const cilckToDetail = (news_type_id: number, type_new_id: number) => {
    if(id as string ==="0" ){
      const news = data_new[0].type_new.filter((item) => item.id === type_new_id);
      const data_new_detail_all = news[0].news_type.filter(
        (data_item) => data_item.id === news_type_id
      );
  
      navigate(`/ogs-new/detail-news/${id}?name=Pang`, {
        state: { data: data_new_detail_all },
      });
    }else{
      const data_new_detail_id = dataNew[0].news_type.filter(
        (data_item) => data_item.id === news_type_id
      );
      navigate(`/ogs-new/detail-news/${id}?name=Pang`, {
        state: { data: data_new_detail_id },
      });
    }
  };

  return (
    <div style={{ padding: "0px 80px" }}>
      {id === "0" ?  <div> <h3 style={{ textAlign:"end", padding: "24px 24px 0px 24px"}}>รวมข่าวทั้งหมด</h3>
       {data_new[0].type_new.map((data,index) => {
        return (
          <div key={index}>
            <h2 style={{paddingTop:"20px"}}>{data.name}</h2>
            {data.news_type.map((item:DataAllNew["news_type"][0], index:number) => {
              return (
                <div
                  key={index}
                  style={{
                    boxShadow:
                      "0 14px 28px rgb(0 0 0 / 13%), 0 10px 10px rgb(0 0 0 / 4%)",
                    padding: "40px 24px",
                    margin: "24px",
                    borderRadius: "10px",
                    textAlign:"start"
                  }}
                  onClick={() => {
                    cilckToDetail(item.id, data.id);
                  }}
                > 
                  <div
                    style={{
                      color: "#828282",
                      fontSize: "14px",
                      paddingBottom: "8px",
                    }}
                  >
                    {item.date}
                  </div>
                  <div>
                    <b>{item.headline}</b>
                  </div>
                  <div style={{ fontSize: "14px", paddingTop: "10px" }}>
                    {item.content}
                  </div>
                  <div
                    style={{
                      color: "#828282",
                      fontSize: "14px",
                      paddingTop: "10px",
                    }}
                  >
                    ประเภทข่าว: {item.category}
                  </div>
                </div>
              );
            })}
          </div>
        )
      })}</div> : 
      dataNew.map((data, index) => {
        return (
          <div key={index}>
            <h2>{data.name}</h2>
            {data.news_type.map((item:DataAllNew["news_type"][0], index:number) => {
              return (
                <div
                  key={index}
                  style={{
                    boxShadow:
                      "0 14px 28px rgb(0 0 0 / 13%), 0 10px 10px rgb(0 0 0 / 4%)",
                    padding: "40px 24px",
                    margin: "24px",
                    borderRadius: "10px",
                    textAlign:"start"
                  }}
                  onClick={() => {
                    cilckToDetail(item.id, data.id);
                  }}
                >
                  <div
                    style={{
                      color: "#828282",
                      fontSize: "14px",
                      paddingBottom: "8px",
                    }}
                  >
                    {item.date}
                  </div>
                  <div>
                    <b>{item.headline}</b>
                  </div>
                  <div style={{ fontSize: "14px", paddingTop: "10px" }}>
                    {item.content}
                  </div>
                  <div
                    style={{
                      color: "#828282",
                      fontSize: "14px",
                      paddingTop: "10px",
                    }}
                  >
                    ประเภทข่าว: {item.category}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })
      }
      
    </div>
  );
};
export default AllNew;
