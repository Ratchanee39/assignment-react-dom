// import NotFound from "@components/new/NotFound";
import "./App.css";
import { Route, RouterProvider, Routes, useRoutes } from "react-router-dom";
// import MainPage from "@components/new/MainPage";
// import LayoutPage from "@components/new/LayoutPage";
// import HomePage from "@components/new/HomePage";
// import AllNew from "@components/new/AllNew";
// import DetailNew from "@components/new/DetailNew";
// import NoPage from "@components/course_router/NoPage";
// import Home from "@components/course_router/Home";
// import LayoutHome from "@components/course_router/LayoutHome";
// import About from "@components/course_router/About";
// import Contact from "@components/course_router/Contact";
import routers from "@function/routers";

// import { Route,  Routes} from "react-router-dom";
// import Home from "@components/course_router/Home";
// import LayoutHome from "@components/course_router/LayoutHome";
// import About from "@components/course_router/About";
// import Contact from "@components/course_router/Contact";
// import NoPage from "@components/course_router/NoPage";
// import routers from "@function/routers";

// news
// import NotFound from "@components/new/NotFound";
// import MainPage from "@components/new/MainPage";
// import LayoutPage from "@components/new/LayoutPage";
// import HomePage from "@components/new/HomePage";
// import AllNew from "@components/new/AllNew";
// import DetailNew from "@components/new/DetailNew";

function App() {
return(
  <RouterProvider router={routers}/>
)
}
// const routers = useRoutes([
//   {
//     path: '*',
//     element: <NoPage />,
//   },
//     {
//       path: '/',
//       element: <Home />,
//     },
//     {
//       path: '/home',
//       element: <LayoutHome />,
//       children: [
//         {
//           index: true,
//           element: <Home />,
//         },
//         {
//           path: 'about',
//           element: <About />,
//         },
//         {
//           path: 'contact',
//           element: <Contact />,
//         },
//     ],
//   },
// ]);
// return routers
// }

// return(
//   <RouterProvider router={routers}/>
// return(
// <Routes>
//   <Route path="/" element={<Home/>} />
//   <Route path="*" element={<NoPage/>} />
//   <Route path="/home" element={<LayoutHome/>}>
//      <Route index element={<Home/>}/>
//      <Route path="about" element={<About/>}/>
//      <Route path="contact" element={<Contact/>}/>
//   </Route>
// </Routes>
// )     
// }


// const router = useRoutes([
//   {
//     path:"/",
//     element:<Home/>
//   },{
//     path:"/about",
//     element:<About/>
//   },
//   {
//     path:"/contact",
//     element:<Contact/>
//   },{
//     path:"*",
//     element:<NoPage/>
//   },{
//     path:"/home",
//     element:<LayoutHome/>,
//     children:[{
//       index:true,
//       element:<Home/>
//     },{
//       path:"about",
//       element:<About/>
//     },{
//       path:"contact",
//       element:<Contact/>
//     }]
//   }
// ])
// return router
// }






//   const routers = useRoutes([
//     {
//       path: '*',
//       element: <NotFound />,
//     },
//     {
//       path: '/',
//       element: <MainPage />,
//     },
//     {
//       path: '/ogs-new',
//       element: <LayoutPage />,
//       children: [
//         {
//           index: true,
//           element: <HomePage />,
//         },
//         {
//           path: 'news/:id',
//           element: <AllNew />,
//         },
//         {
//           path: 'detail-news/:id',
//           element: <DetailNew />,
//         },
//       ],
//     },
//   ]);
//   return routers
 
// }

export default App;


  //   <Routes>
//   <Route path="*"  element={<NoPage/>} />
//   <Route index  element={<Home/>} />
//   <Route path="/home" element={<LayoutHome/>} >
//      <Route index element={ <Home/>} />
//      <Route path="about" element={<div><h2>About5</h2> <About/></div>} />
//      <Route path="contact" element={ <Contact/>} />
//      <Route path="contact/:id" element={ <Contact/>} />
//   </Route> 
// </Routes>