import React from "react";
import Collection from '../components/Collection'

class Main extends React.Component{
    state={
        collection:[],
        search: 'Rembrandt van Rijn',
        loading:true
    }

    render(){
        return <>
        <Collection/>
        </>;
    }

}

export default Main