import {FC} from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

type DataNew = {
  id: number;
  headline: string;
  content: string;
  date: string;
  time: string;
  category: string;
  publisher: string;
}

const DetailNew: FC = () =>{
  const location = useLocation();
  const data =location?.state?.data;
  const [searchParams] = useSearchParams();
  const name =searchParams.get('name')

 return(
    <div>
      <div>
      <h4 style={{textAlign:"end",padding:"10px 90px"}}>ผู้เข้าชม: {name}</h4>
     
     {data?.map((item:DataNew,index:number)=>{
      return(
        <div> <h2 style={{textAlign:"center",padding:"10px 90px"}}>รายละเอียด{item?.headline}</h2>
        <div key={index} style={{
          margin:"30px 90px",border:"1px solid #828282",borderRadius:"20px",textAlign:"start",padding:"30px"
        }}>
          <div>รหัสข่าว : {item?.id}</div>
          <div>วันที่ลงข่าว : {item?.date}</div>
          <div>เวลาที่ลงข่าว : {item?.time}</div>
          <div>หัวข้อข่าว: {item?.headline}</div>
          <div>เนื้อหาข่าว : {item?.content}</div>
          <div>ประเภทข่าว : {item?.category}</div>
          <div>สำนักข่าว: {item?.publisher}</div>
        </div>
        </div>
      )
     })}
     </div>
    </div>
 )   
}
export default DetailNew;