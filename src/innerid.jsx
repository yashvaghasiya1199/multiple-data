import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { multiapi } from "../slices/multipleapi"

export function Innerid(){
  const {id} = useParams()
  const dispatch = useDispatch()
  const fdata = useSelector(state => state.multiapi.apidata)
  console.log(fdata);
  
  
  
  
  useEffect(()=>{
      dispatch(multiapi(id))                                                                     
    },[])
    if(!fdata){
      return <h1>data not found</h1>
    }
    return <>
    <div style={{color:"white"}} >
    <h2>inner is</h2>
    </div>
    
    <h1> this is first api</h1>
    <h2>{fdata.result1.name}</h2>
    <h2>{fdata.result1.email}</h2>
    <h1>-----------</h1>
    <h3>this is second api</h3>
    <h2>{fdata?.result2.completed? "true" :" false"}</h2>
    
    </>
}