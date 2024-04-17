// import NotFound from "@components/new/NotFound";
import "./App.css";
import { Route, RouterProvider, Routes, useRoutes } from "react-router-dom";
import routers from "@function/routers";

function App() {
return(
  <RouterProvider router={routers}/>
)
}
export default App;
