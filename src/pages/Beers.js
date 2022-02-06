import axios from 'axios';
import { useState, useEffect } from 'react';
import BeerCard from '../components/BeerCard';
// import { Link } from 'react-router-dom'

const Beers = () => {


    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                console.log(response)
                setBeers(response.data)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div className='grid'>

            {beers.map(beer => {

                return <div key={beer._id}>
                 <BeerCard beer={beer}/>
                  </div>
            
            })}

        </div>
    )
}

export default Beers