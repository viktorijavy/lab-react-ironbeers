import axios from 'axios';

import { useState, useEffect } from 'react';

const RandomBeer = () => {

    const [ beer, setBeer ] = useState('')

   useEffect(() => {
       axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
       .then(response=> {
           setBeer(response.data)
       })
       .catch(err => console.log(err))
   },[])
    

    return (
      <div className="beer-cont">
      <div className="beer">

          <h1>{beer.name}</h1>
          <img src={beer.image_url} alt="beer" height="150px"/>
          <p>{beer.tagline}</p>
          <p>{beer.description}</p>
          <p> attenuation level: {beer.attenuation_level}</p>
          <h3>first brewed: {beer.first_brewed}</h3>

        </div>  
      </div>
    )
}

export default RandomBeer