import React from 'react';
import '.././index.css';
import * as ReactRedux from 'react-redux';
import * as actions from './artwork.actions';
import { Link } from 'react-router';


class artwork extends React.Component {

  componentDidMount() {
    this.props.fetchArtCover(/*this.props.params.data*/)
  }

render() {

  let loginName;
     let token = this.props.login.token;
     if (token) {
       loginName = "hi " + this.props.login.firstname + "!";
     }

   let coverImages;
   console.log(this.props.art.featured_artist)

   console.log(this.props.art.featured_artist.firstname);

   if (this.props.art.featured_artist) {
     coverImages = this.props.art.featured_artist.map((input,idx) => <span key={idx} className="artCover" > <Link to={"/artwork/"+ input.id}>  <img src={input.featured_image}/>
     <span className="artist-name"> {input.name} </span>
     </Link>
    </span>  );
   }

return (
  <div className="artcover-background">


  <span className="artcover-title"> Artist  </span>


  <div className="artcover-scrollmenu">

  { coverImages }

  </div>



  </div>

);
  }
}


const artworkContainer = ReactRedux.connect(
  state => state,
  // state.art

  actions
)(artwork);


export default artworkContainer;
