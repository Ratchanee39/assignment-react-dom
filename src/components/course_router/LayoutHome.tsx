import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const LayoutHome: React.FC = ()=>{
  // const {id} = useParams()
 
    return(
        <>
        <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home/about/1?id2=pang">About</Link>
          </li>
          <li>
            <Link to="/home/contact">Contact</Link>
          </li>
          {/* <li>
            <Link to={`/home/contact/1`}>Contact: {id}</Link>
          </li> */}
        </ul>
      </nav>
      <Outlet />
        </>
    )
}
export default LayoutHome;