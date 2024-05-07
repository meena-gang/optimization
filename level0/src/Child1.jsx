import React from 'react'

const Child1 = React.memo(({incrementHandler,decrementHandler,count}) => {
   console.log('child1')

    return (
      <>
        
        <div>
          {count}
          <button onClick={incrementHandler}>
            Increment
          </button>
          <button onClick={decrementHandler}>
            Decrement
          </button>
          
        </div>
        
      </>
    )
})

export default Child1