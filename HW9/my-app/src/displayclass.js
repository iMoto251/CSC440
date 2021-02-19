import React, { Fragment } from 'react';

function DisplayClass(props){
    const id = props.id;
    console.log(id);
    let info = [];

    if(id === "CSC411"){
        info = [];
        info.push("411 Hello");
    }

    if(id === "CSC414"){
        info = [];
        info.push("414 Hello");
    }

    if(id === "CSC440"){
        info = [];
        info.push("440 Hello");
    }

    if(id === "CSC424"){
        info = [];
        info.push("424 Hello");
    }

    if(id === "CSC441"){
        info = [];
        info.push("441 Hello");
    }

    return(
        <Fragment>
            {info}
        </Fragment>
    )
}

export default DisplayClass;