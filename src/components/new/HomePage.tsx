import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface News {
  title: string;
  sub_title: string;
  type_new: {
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
  }[];
}

export const data_new: News[] = [
  {
    title: "ข่าวเด็ดประจำวันนี้",
    sub_title:
      "เรื่องเด็ด ประเด็นร้อนที่ทุกคนไม่รู้ แต่เรารู้ เพราะเราคือ ogs Daily News เราสืบทุกซอกทุกมุม คติการทำงาน (เรารักงาน ทำงานด้วยความขยันขันแข็ง เที่ยงวันทันเหตุการณ์ไม่ใช่เรา แต่เรามาทันงานแน่นอน)",
    type_new: [
      {
        id: 1,
        name: "ข่าวกีฬา",
        news_type: [
          {
            id: 1,
            headline: "ข่าวกีฬาบอล",
            content:
              "ผลการแข่งขันวันนี้ ลิเวอร์ฟูเอาชนะแมนยู ด้วยคะแนน 5-0 คะแนน",
            date: "2024-04-04",
            time: "08:00",
            category: "ข่าวกีฬา",
            publisher: "ogs Daily News",
          },
          {
            id: 2,
            headline: "ข่าวกีฬาเปตอง",
            content: "เล่นเปตองแบบไทยๆ",
            date: "2024-02-04",
            time: "09:00",
            category: "ข่าวกีฬา",
            publisher: "ogs Daily News",
          },
          {
            id: 3,
            headline: "ข่าวกีฬาตะกร้อ",
            content: "เตะตะกร้อด้วยท่าจระเข้ฟาดหาง",
            date: "2024-03-04",
            time: "09:00",
            category: "ข่าวกีฬา",
            publisher: "ogs Daily News",
          },
          {
            id: 4,
            headline: "ข่าวกีฬาว่ายน้ำ",
            content: "ดานี่ว่ายน้ำเข้าเส้นชัยด้วยท่าผีเสือน้อยในมหาสุมทร",
            date: "2024-01-04",
            time: "09:00",
            category: "ข่าวกีฬา",
            publisher: "ogs Daily News",
          },
        ],
      },
      {
        id: 2,
        name: "ข่าวการเมือง",
        news_type: [
          {
            id: 1,
            headline: "ข่าวการเมืองนารี",
            content: "ท่านนารีเดินหาเสียงด้วย2เท้า",
            date: "2024-01-04",
            time: "10:00",
            category: "ข่าวการเมือง",
            publisher: "News Agency B",
          },
          {
            id: 2,
            headline: "ข่าวการเมืองทรนี",
            content: "ท่านทรนีกินข้าวด้วย2มือ",
            date: "2024-03-04",
            time: "10:00",
            category: "ข่าวการเมือง",
            publisher: "News Agency B",
          },
          {
            id: 3,
            headline: "ข่าวการเมืองมาลี",
            content:
              "ท่านมาลีหัวเราะอย่างมีความสุขเมื่อรู้ว่าตัวเองชนะเลือกตั้ง แต่จริงแล้วท่านนอนฝัน",
            date: "2024-02-04",
            time: "10:00",
            category: "ข่าวการเมือง",
            publisher: "News Agency B",
          },
          {
            id: 4,
            headline: "ข่าวการเมืองตาลี",
            content:
              "ท่านตาลีมองผลคะแนนด้วยตาอย่างเศร้าหมอง เมื่อรู้ว่าตัวเองแพ้แค่100คะแนน",
            date: "2024-04-04",
            time: "10:00",
            category: "ข่าวการเมือง",
            publisher: "News Agency B",
          },
        ],
      },
      {
        id: 3,
        name: "ข่าวดารา",
        news_type: [
          {
            id: 1,
            headline: "ข่าวดาราดาลมเดตร้อน",
            content:
              "ดาลมเดตร้อนกับหมุ่มอาทิตย์จึงทำให้ขอนแก่นร้อนแรงเหมือนซ้อมตลกนรกทั้งวัน แต่มีม้าข้าวมาช่วยให้เราขึ้นสวรรค์ด้วยแอร์ inet",
            date: "2024-04-04",
            time: "11:00",
            category: "ข่าวดารา",
            publisher: "News Agency C",
          },
          {
            id: 2,
            headline: "ข่าวหนูน้อยผู้น่ารักฝากผลงานทางช่องมีสี",
            content:
              "วันนี้ที่คอยรอ..รอคอย หนูน้อยผู้น่ารักตัดสินใจลงเล่นหนัง หลังจากหายหายจากวงการไป 10 ปี",
            date: "2024-02-04",
            time: "11:00",
            category: "ข่าวดารา",
            publisher: "News Agency C",
          },
          {
            id: 3,
            headline: "ข่าวจันทร์เจ้าเอ๋ย ขอข้าวขอแกง",
            content:
              "จันทร์เจ้าผู้นำเทรนด์ เปลี่ยนจากขอแกง เปลี่ยนมาเป็นขอเงิน เพราะทองคำพุ่งสูงในรอบ 500 ปี",
            date: "2024-01-04",
            time: "11:00",
            category: "ข่าวดารา",
            publisher: "News Agency C",
          },
          {
            id: 4,
            headline: "ข่าวแนปซี่ พาตะลุยกินข้าวที่สุดแปลก",
            content:
              "เมื่อวันจันทร์ที่ผ่านมานางเอกสาวอย่างคุณแนปซี่ แนะนำเมนุสุดโหด สุดแปลกให้เรา แต่ไม่รู้คือเมนูอะไรเพราะแบตกล้องหมดก่อน",
            date: "2024-03-04",
            time: "11:00",
            category: "ข่าวดารา",
            publisher: "News Agency C",
          },
        ],
      },
      {
        id: 4,
        name: "ข่าวทั่วไป",
        news_type: [
          {
            id: 1,
            headline: "ข่าวสุดแปลกไก่ออกลูกเป็นไข่",
            content: "เมื่อวานที่ผ่านมาล่าสุดมีคนพบเห็นไก่ออกลูกเป็นไข่",
            date: "2024-01-04",
            time: "12:00",
            category: "ข่าวทั่วไป",
            publisher: "News Agency D",
          },
          {
            id: 2,
            headline: "ข่าวเรื่องที่ทุกคนไม่รู้ ตอนนี้เราสามรถดื่มน้ำได้แล้วนะ",
            content:
              "พนักงานบริษัทแห่งหนึ่งลืมการดื่มน้ำ หลังจากกินน้ำหวานมาทั้งวัน",
            date: "2024-03-04",
            time: "12:00",
            category: "ข่าวทั่วไป",
            publisher: "News Agency D",
          },
          {
            id: 3,
            headline: "ข่าวดื่มน้ำแบบไหนดี?",
            content: "รู้หรือไม่! ตอนนี้เราสามารถดื่มได้วันละ8แก้ว",
            date: "2024-04-04",
            time: "12:00",
            category: "ข่าวทั่วไป",
            publisher: "News Agency D",
          },
          {
            id: 4,
            headline: "ข่าวเราจะนั่งทำงานแบบไหนดี วันนี้เรามีคำตอบ",
            content: "นั่งแบบที่เราสบาย นั่งแบบไหนก็ได้",
            date: "2024-02-04",
            time: "12:00",
            category: "ข่าวทั่วไป",
            publisher: "News Agency D",
          },
        ],
      },
    ],
  },
];

const HomePage: FC = () => {
 
  const navigate = useNavigate();
  const [sortedNews, setSortedNews] = useState<News[]>([]);

  useEffect(() => {
    const sortedData = data_new.map((news) => ({
      ...news,
      type_new: news.type_new.map((type) => ({
        ...type,
        news_type: type.news_type.sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        }),
      })),
    }));

    setSortedNews(sortedData);
  }, []);

  const cilckToDetail = (id: number, data_id: number) => {
    const news = sortedNews[0].type_new.filter((item) => item.id === data_id);
    const data_new_detail = news[0].news_type.filter(
      (data_item) => data_item.id === id
    );

    navigate(`/ogs-new/detail-news/${id}?name=Pang`, {
      state: { data: data_new_detail },
    });
  };

  return (
    <div style={{ padding: "0px 80px" }}>
      {data_new.map((item: News, index: number) => {
        return (
          <div key={index}>
            <h2 style={{ paddingTop: "20px" }}>{item.title}</h2>
            <h5 style={{ padding: "20px 0px" }}>{item.sub_title}</h5>
            {item.type_new.map((data: News["type_new"][0], index: number) => {
              return (
                <div
                  key={index}
                  style={{
                    marginTop: "60px",
                    textAlign: "left",
                    padding: "0px 100px",
                  }}
                >
                  <b>ประเภทข่าว : {data.name}</b>
                  {data.news_type
                    .slice(0, 2)
                    .map(
                      (
                        data_news: News["type_new"][0]["news_type"][0],
                        index: number
                      ) => {
                        return (
                          <div
                            key={index}
                            style={{
                              boxShadow:
                                "0 14px 28px rgb(0 0 0 / 13%), 0 10px 10px rgb(0 0 0 / 4%)",
                              padding: "40px 24px",
                              margin: "14px",
                              borderRadius: "10px",
                            }}
                            onClick={() => {
                              cilckToDetail(data_news.id, data.id);
                            }}
                          >
                            <div
                              style={{
                                color: "#828282",
                                fontSize: "14px",
                                paddingBottom: "8px",
                              }}
                            >
                              {data_news.date}
                            </div>
                            <div>
                              <b>{data_news.headline}</b>
                            </div>
                            <div
                              style={{ fontSize: "14px", paddingTop: "10px" }}
                            >
                              {data_news.content}
                            </div>
                            <div
                              style={{
                                color: "#828282",
                                fontSize: "14px",
                                paddingTop: "10px",
                              }}
                            >
                              ประเภทข่าว: {data_news.category}
                            </div>
                          </div>
                        );
                      }
                    )}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default HomePage;
