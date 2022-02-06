import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const NewBeer = () => {

    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirst_brewed] = useState('')
    const [brewer_tips, setBrewer_tips] = useState('')
    const [attenuation_level, setAttenuation_level] = useState('')
    const [contributed_by, setContributed_by] = useState('')

    const handleSubmit = (e) => {
       e.preventDefault()
       const requestBody = { name, tagline, description, first_brewed, brewer_tips, attenuation_level, contributed_by }

       axios.post('https://ih-beers-api2.herokuapp.com/beers/new', requestBody)
       .then(response => {
         console.log(response)
         navigate('/beers')
       })
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleTaglineChange = (e) => {
        setTagline(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value)
    }

    const handleFirstBrewedChange = (e) => {
        setFirst_brewed(e.target.value)
    }

    const handleBrewerTipsChange = (e) => {
        setBrewer_tips(e.target.value)
    }
    const handleAttenuationLevelChange = (e) => {
        setAttenuation_level(e.target.value)
    }
    const handleContributedChange = (e) => {
        setContributed_by(e.target.value)
    }

    return (
        <div className='form-container'>

            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className='input-item'>
                    <label>Name</label>
                    <input type="text" value={name} onChange={handleNameChange} />
                    </div>
                    <div className='input-item'>
                    <label>Tagline</label>
                    <input type="text" value={tagline} onChange={handleTaglineChange} />
                    </div>
                    <div className='input-item'>
                    <label>Description</label>
                    <textarea type="text" value={description} onChange={handleDescriptionChange} />
                    </div>
                    <div className='input-item'>
                    <label> First brewed</label>
                    <input type="text" value={first_brewed} onChange={handleFirstBrewedChange} />
                    </div>
                    <div className='input-item'>
                    <label>Brewer tips</label>
                    <input type="text" value={brewer_tips} onChange={handleBrewerTipsChange} />
                    </div>
                    <div className='input-item'>
                    <label>Attenuation level</label>
                    <input type="number" value={attenuation_level} onChange={handleAttenuationLevelChange} />
                    </div>
                    <div className='input-item'>
                    <label>Contributed by</label>
                    <input type="text" value={contributed_by} onChange={handleContributedChange} />

                    <button> Submit</button>
                    </div>

                  
                </form>
            </div>
        </div>

    )
}

export default NewBeer;