import React from 'react'

function Jerks(props) {
  return (
    <main>
      <h2>The Death Eaters:</h2>
      {
        props.baddies.map( (results) => {
          return(
            <h3 key={results._id}>{results.name}</h3>
          )
        })
      }
    </main>
  )
}
export default Jerks

