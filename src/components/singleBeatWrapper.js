import React from 'react'
import { useParams } from 'react-router-dom'

const Wrapper = (Component) => {
    return function WrappedComponent(props){
        const hookVal = useParams();
        return <Component {...props} hook={hookVal} />
    }
};

export default Wrapper;



