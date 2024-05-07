import React from 'react'

const Child2 = React.memo(({timer,start,stop,pause}) => {
    console.log('child2')
    return (
        <>
           <h1>{timer}</h1>
           <button onClick={start}>Start</button>
           <button onClick={stop}>Stop</button>
           <button onClick={pause}>Reset</button>
        </>
    )
})

export default Child2