import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Beat from '../BeatList/beat'
import Wrapper from '../singleBeatWrapper'


class SingleBeat extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            file: undefined
        }


    }
    componentWillMount(){
        axios.get(`/beats/${this.props.hook.id}`)
            .then(e => {
                this.setState({file: e.data});
            })
            .catch((e) => {
                console.log(e);
            })
    }
    render(){
        return(
            <Beat myFile={this.state.file}/>
        )
    }
};

SingleBeat = Wrapper(SingleBeat);

export default SingleBeat;