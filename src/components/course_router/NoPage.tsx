import {FC} from 'react';
import { useNavigate } from 'react-router-dom';



const NoPage :FC= ()=>{
    const navigator = useNavigate();

    return(
        <>
        <h1>404 Not Found</h1>
        <button style={{background:"green",color:"#fff"}} onClick={()=>navigator("/")}>กลับสู่หน้าหลัก</button>
        </>
    )
}
export default NoPage;