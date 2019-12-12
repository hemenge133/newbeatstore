import React from 'react';
import '../../css/bootstrap.min.css'
import '../../css/BeatList.css'





const BeatList = (props) => {
    return(
        <div style={{display: 'content'}}>
            {
                props.songs.map((element) => (
                    <div key={element._id} className="d-flex bd-highlight mb-3 border-bottom border-top align-items-center space-between" style={{height: '120px'}}>
                        <div className="p-1 p-md-2 bd-highlight border-left " style={{height: '100px' , width: '100px'}}>
                            <img src={`/images/${element.art}`}/>
                        </div>
                        {/* <div className="p-2 bd-highlight" onClick={playPause} style={{width: '30px', marginLeft: '10px', marginRight: '10px'}}><img src={play}/></div> */}
                        <div className="mr-auto p-2 bd-highlight" >
                            <a href={`/songs/${element._id}`}>{element.title}</a>
                        </div>
                        <div className="p-2 bd-highlight"><audio id={element.preview} controls="controls"  src={`/sounds/${element.preview}`} ></audio></div>
                        <div className="p-2 bd-highlight">{element.price}</div>
                        <div className="p-2 bd-highlight border-right"><span className="align-middle">Cart</span></div>
                    </div>
                ))
            }
        </div>
    );
};

export default BeatList;