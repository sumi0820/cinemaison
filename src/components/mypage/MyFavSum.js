import React from 'react';

const card = {
    marginBottom:'15px',
}

const textSetting ={
    display: "block",
    width: '500px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
}

const MyFavSum = ({favorite}) => {
    return (
        <div className="card" style={card}>
        <div className="card-body">
            <h3 className="card-title" style={textSetting}>{favorite.title}</h3>
            <h6 className="card-text" style={textSetting}>Director: {favorite.director}</h6>
            <h6 className="card-text" style={textSetting}>Released: {favorite.released}</h6>
        </div>
    </div>
    );
};

export default MyFavSum;