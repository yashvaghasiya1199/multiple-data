
import { useDispatch, useSelector } from "react-redux";
import { add, dec } from "../slices/slice";
import { off } from "../slices/light.slice";
import { fetchData, removedata } from "../slices/fetchdata";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";


export function App2(){
    const data = useSelector(state => state.first.count);
    const dispatch = useDispatch();
    
    // Fetch theme state
    const theme = useSelector(state => state.mode.value);
    
    // Fetch API data state
    const apidata= useSelector(state => state.fetchdatas);  // Fallback to empty object if fetchdata is undefined
    console.log(apidata?.apidata);

  useEffect(()=>{
    dispatch(fetchData("https://jsonplaceholder.typicode.com/comments"))
  },[])
    return (
      <div>
        <button onClick={() => dispatch(add())}>Increase Count</button>
        <h2>{data}</h2>
        <button onClick={() => dispatch(dec())}>Decrease Count</button>
  
        <button onClick={() => dispatch(off())}>{theme ? "Turn Off" : "Turn On"}</button>
        <p>Theme is {theme ? "On" : "Off"}</p>
  
        <div className={theme ? "on" : "off"}>
          <h1>Hi, this is Redux Toolkit!</h1>
        </div>
  
        {/* Data fetching buttons */}
        {/* <button onClick={() => dispatch(fetchData("https://jsonplaceholder.typicode.com/comments"))}>
          Fetch Data
        </button> */}
        <button onClick={() => dispatch(removedata())}>Clean Data</button>
        {/* <button onClick={() => dispatch(multiapi())}>Multiple APIs</button> */}
   {
    apidata?.apidata.length > 0 ? <div>
     {
      apidata?.apidata.map((c,i)=>{
        return <div key={i} >
            <NavLink to={`/i/${c.id}`}>
            <h3>{c.id }   {c.name}</h3>
            </NavLink>
        </div>
      })
     }
     
    </div>: <h2>please press fetch data button </h2>
   }
        
      </div>
    );
}