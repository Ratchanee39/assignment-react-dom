import { FC, useEffect, useState } from "react";
import { data_new } from "@new/HomePage";
import { useParams, useNavigate } from "react-router-dom";

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
    const news = data_new[0].type_new.filter((item) => {
      if (Number(id) === item.id) {
        return item.news_type.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
      } else if (Number(id) === 0) {
        return item.news_type.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        });
      }
    });

    setDataNew(news);
  }, [id]);

  const clickToDetail = (news_type_id: number, type_new_id: number) => {
    navigate(`/ogs-new/detail-news/${type_new_id}/${news_type_id}?name=Pang`);
  };

  return (
    <div style={{ padding: "0px 80px" }}>
      <div>
        {id === "0" ? (
          <h3 style={{ textAlign: "end", padding: "24px 24px 0px 24px" }}>
            รวมข่าวทั้งหมด
          </h3>
        ) : (
          ""
        )}

        {dataNew.map((data, index) => {
          return (
            <div key={index}>
              <h2 style={{ paddingTop: "20px" }}>{data.name}</h2>
              {data.news_type.map(
                (item: DataAllNew["news_type"][0], index: number) => {
                  return (
                    <div
                      key={index}
                      style={{
                        boxShadow:
                          "0 14px 28px rgb(0 0 0 / 13%), 0 10px 10px rgb(0 0 0 / 4%)",
                        padding: "40px 24px",
                        margin: "24px",
                        borderRadius: "10px",
                        textAlign: "start",
                        cursor:"pointer"
                      }}
                      onClick={() => {
                        clickToDetail(item.id, data.id);
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
                }
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default AllNew;
