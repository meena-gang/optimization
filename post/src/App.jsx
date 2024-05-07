import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef,useEffect} from 'react'
import Post from './Post'

import { useMemo } from 'react'

function App() {
  const[timer,setTimer] = useState(0);
  const[postData, setPostData] = useState({title:'',
                                            body:'',
                                            verified:false,
                                            id:''
                                            })

                          
  const[postArr, setPostArr] = useState([]);                                     
  const timerRef = useRef(null);
  const changeHandler = (e) => {
    setPostData({...postData,[e.target.name]:e.target.value,id:Math.random()})
  }

    useEffect(() => {
        timerRef.current = setInterval(() => {
        setTimer(timer => timer+1);
        },1000)
    
     return () => clearInterval(timerRef.current) 
     },[])
   const submitHandler = (e) => {
      e.preventDefault();
      setPostArr([...postArr,postData])
      setPostData({title:'',
      body:'',
      verified:false})
   }
  //  const verifyHandler = useCallback((id) => {
  //   console.log(postArr[id].verified);
  //   postArr[id].verified = !postArr[id].verified
  //   setPostArr((prev) => [...prev]);
  // },[postArr])
  //  console.log(postData);
  const mappingFunc = (post,i) => <Post postObj={post} key={i}/>
  return (
    <>
     <p>Timer: {timer}</p>
     <form onSubmit={submitHandler}>
        <input type='text' name='title' placeholder='Enter title' onChange={changeHandler} value={postData.title}/><br/>
        <input type='text' name='body' placeholder='Enter body' onChange={changeHandler} value={postData.body}/><br/>
        <input type='submit'/>
     </form>
     <hr/>
     <h1>Posts</h1>
     <div>
      {postArr && postArr.map(mappingFunc)}
     </div>
    {/* <Post postArr={postArr} verifyHandler={verifyHandler}/> */}
    </>
  )
}

export default App

