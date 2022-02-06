import { Link } from "react-router-dom";

const BeerCard = (props) => {


    return (
        <div>
            <div className='container'>

                <div>
                    <h1>{props.beer.name}</h1>
                </div>
                <div>
                 
                    <img src={props.beer.image_url} alt="s" height="150px" />

                </div>

                <div>
                    <p>{props.beer.tagline}</p>
                    
                    <p>{props.beer.contributed_by}</p>
                </div>

               <Link to={`/beers/${props.beer._id}`}><button>More info</button></Link>

            </div>
        </div>
    )
}

export default BeerCard;