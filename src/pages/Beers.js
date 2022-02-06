import axios from 'axios';
import { useState, useEffect } from 'react';
import BeerCard from '../components/BeerCard';
// import { Link } from 'react-router-dom'

const Beers = () => {

    const [ query, setQuery ] = useState('')
    const [ beers, setBeers ] = useState([]);
    
    const handleSearchChange = (e) => {
      setQuery(e.target.value)
    }

    

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`)
            .then(response => {
                console.log(response)
                setBeers(response.data)
            })
            .catch(err => console.log(err))
    }, [query])



    return (

        <>
            <div className='searchfield'>
                <input type="text" placeholder='search here' value={query} className="input-field" onChange={handleSearchChange} />
            </div>

            <div className='grid'>

                {beers.map(beer => {

                    return <div key={beer._id}>
                        <BeerCard beer={beer} />
                    </div>

                })}

            </div>
        </>
    )
}

export default Beers