import { Link } from 'react-router-dom';

const Home = () => {


    return (
       <div className="body">
        <div className="main-container">

          <div className="beer-container">
              <img width="650px" src="https://images.unsplash.com/photo-1474314005122-3c07c4df1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="beer"/>
              {/* <Link class='link-to-beers' to="/beers">All Beers</Link> */}
             <Link to={'/beers'}> <h1> All beers</h1></Link>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
              took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
              centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.</p>
          </div>

          <div className="beer-container">
          <img width="650px" src="https://images.unsplash.com/photo-1612528443702-f6741f70a049?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80" alt="beer"/>
              <Link to={'/random-beer'}><h1>Random beer</h1></Link>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
              took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
              centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.</p>
          </div>

          <div className="beer-container">
          <img width="650px" src="https://images.unsplash.com/photo-1575037614876-c38a4d44f5b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="beer"/>
              <h1>New Beer</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
              took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
              centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
              PageMaker including versions of Lorem Ipsum.</p>
          </div>



        </div>

        </div>
    )
}

export default Home;