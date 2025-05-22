
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App2 } from "./app2";
import { Innerid } from "./innerid";

function App() {
 const route = createBrowserRouter([
  {
    path:"/",
    element:<App2/>
  },
  {
    path:"/i/:id",
    element:<Innerid/>
  }
 ])

 return <RouterProvider router={route}/>

}

export default App;
