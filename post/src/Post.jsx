import React from 'react'
import { useState } from 'react'
import { useCallback } from 'react'


const Post = React.memo(({postObj}) => {
    const[toggle,setToggle] = useState(false);
    const verifyHandler = () => {
        // console.log(postArr[id].verified);
        setToggle(!toggle);
        postObj.verified = ! postObj.verified;
        
      }
    
  return (
    <div>
         
        <div  style={{backgroundColor:`rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`, 
        border:'1px solid black',width:'500px',color:'white',margin:'10px'}}>

                                                <h2>{postObj.title}</h2>
                                                <p>{postObj.body}</p>
                                                <button onClick={ verifyHandler}>{postObj.verified?'Verified':'Verify'}</button>
                                                </div>
                    
    </div>
  )
})

export default Post;