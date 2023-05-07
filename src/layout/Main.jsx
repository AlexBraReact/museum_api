import React from "react";
import ArtObjects from "../components/ArtObjects";

//const API_KEY = process.env.API_KEY;  TODO: API_KEY is undefined
const API_KEY = 'J1dQKgDI';

class Main extends React.Component {
  state = {
    collection: [],
    search: "Rembrandt van Rijn",
    loading: true,
  };

  searchCollection = (search)=>{
    this.setState(
        {loading:true},
        () => {
            fetch(`https://www.rijksmuseum.nl/api/en/collection?key=${API_KEY}&involvedMaker=Rembrandt+van+Rijn&imgonly=true&toppieces=true&s=relevance`)
            .then((response)=>response.json())
            .then((data)=>this.setState({collection:data,loading:false}))
            .catch((error)=>{
                console.error(error);
                this.setState({collection:[],loading:false})
            })
        }
        
    );
  }

  componentDidMount(){
    this.searchCollection(this.state.search);
  }

  render() {
    return (
      <>
        <ArtObjects collection={this.state.collection}/>
      </>
    );
  }
}

export default Main;
