import React from 'react'

//component to render the assholes to page
//assholes come from props
//that means this doesnt need state

function Jerks(props) {
  // console.log(props.shitHeads);
  return (
    <main>
      <h2>The Death Eaters:</h2>
      {
        props.shitHeads.map( (results) => {
          return(
            <h3 key={results._id}>{results.name}</h3>
          )
        })
      }
    </main>
  )
}
export default Jerks

