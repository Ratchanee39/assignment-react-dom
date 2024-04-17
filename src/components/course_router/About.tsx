import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
// import { useLocation, useSearchParams } from 'react-router-dom';



const About: React.FC = ()=>{
    const [searchParams,setSearchParams] = useSearchParams();
    // const id2 = searchParams.get('id2');
    // searchParams.set('id2', '2');
    // console.log(id2)

   useEffect(()=>{
    const id2 = searchParams.get('id2');
    setSearchParams({'id2':'myname' ,'id1':'id1'})
    console.log(id2)
   
   },[searchParams,setSearchParams])


    // searchParams.set('name', '1');
    // searchParams.set('id', '2');
    // searchParams.set('name', '1');
    // searchParams.append('id1', '2');
    // const id1 = searchParams.get('id1');
    // console.log("id1",id1)
    // searchParams.append('name1', '1');
    
    // const new_id = searchParams.toString();
    // console.log(new_id); 
    // const id = searchParams.has('id');
    // console.log("id",id)
    // let hasId = false;
    // searchParams.forEach((value, key) => {
    //   if (value === '12') {
    //     hasId = true;
    //   }
    // });
    // console.log(hasId); 

    const {id,name} = useParams();
    console.log("id:", id)
    return(
        <>
        <h1>About
        </h1>
        <div>{id},{name}</div>
        </>
    )
}
export default About;