import React from 'react';
import '../css/bootstrap.min.css';

const Console = (props) => {

    return(
        <div className="row ">
            <div className="col-md-6 m-auto ">
                <form action="/upload" method="POST" enctype="multipart/form-data">
                    <div className="custom-file mb-3">
                        <input type='file' name='fileA' id='fileArt'>
                        </input>
                        <label htmlFor='fileArt' className='custom-file-label'>Choose Art</label>
                    </div>
                    <div className="custom-file mb-3">
                        <input type='file' name='filePre' id='filePreview'>
                        </input>
                        <label htmlFor='filePreview' className='custom-file-label'>Choose Preview</label>
                    </div>
                    <div className="custom-file mb-3">
                        <input type='file' name='fileM' id='fileMp3'>
                        </input>
                        <label htmlFor='fileArt' className='custom-file-label'>Choose MP3</label>
                    </div>
                    <div className="custom-file mb-3">
                        <input type='file' name='fileS' id='fileStems'>
                        </input>
                        <label htmlFor='fileStems' className='custom-file-label'>Choose Stems</label>
                    </div>
                    <div className="custom-file mb-3">
                        <input type="text" name="fileTitle" id="fileT"/>
                        <label htmlFor='fileT' >Title</label>
                    </div>
                    <div className="custom-file mb-3">
                        <input type="number" name="filePrice" id="fileP"/>
                        <label htmlFor='fileT' >Price ($)</label>
                    </div>
                    <input type="submit" value="submit" className="btn btn-primary btn-block"/>
                </form>
            </div>
        </div>
    );
};

export default Console;