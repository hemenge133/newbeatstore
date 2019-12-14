import React from 'react';
import '../../css/bootstrap.min.css'
import Table from 'react-bootstrap/Table'
import { Form, Button } from 'react-bootstrap'
import '../../css/beats.css'
import {useSpring, animated} from 'react-spring';
import BeatList from "./BeatList";


class Beats extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            songList: []
        };
    }

    componentDidMount(){
        fetch('/files')
            .then((res) => res.json())
            .then((songs) => this.setState({
                songList: songs
            }))
            .then((songs) => console.log("this" + songs))
            .catch((err) => console.log(err));
    };

    render(){
        return(
            <div className="container-fluid h-100">
                <div className="row h-100">
                    <div className="col-12 col-md-10 col-lg-8 mx-auto h-100">
                        <div className="jumbotron bg-light " style={{marginTop: '5rem',marginBottom: '5rem', overFlow: 'scroll'}}>
                            <div className="mh-25">
                                <BeatList songs={this.state.songList}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Beats;