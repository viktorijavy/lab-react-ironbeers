import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

const BeerDetails = () => {


const [beer, setBeer ] = useState(null)
const { id } = useParams()

useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)
      .then((response) => {
        console.log(response);
        setBeer(response.data);
      })
      .catch((err) => console.log(err));
  },[id]);


  if (!beer) return <></>
  return (
      <div className="beer-cont">
          <div className="beer">
              <img src={beer.image_url} alt={beer.name} height="150px"/>
              <h1>{beer.name}</h1>
              <p>{beer.tagline}</p>
              <h2>attenuation leve: {beer.attenuation_level}</h2>
              <h2>first brewed: {beer.first_brewed}</h2>
              <p>{beer.description}</p>
              <h5><strong>Created by:</strong> {beer.contributed_by}</h5>
          </div>
      </div>
  );
}

    


export default BeerDetails;