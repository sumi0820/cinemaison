import React from 'react';
import MyFavSum from './MyFavSum'
import { Link } from 'react-router-dom'


const MyFavList = ({favorites, auth}) => {
    return (
        <div className="project-list section">
            { favorites && favorites.map(favorite => {
                if(auth.uid === favorite.authorId){    
                return (
                    <Link to={'/movie/' + favorite.imdbID} key={favorite.id}>
                      <MyFavSum favorite={favorite} />
                    </Link>
                )
            }})}


        </div>
    );
};


export default MyFavList

