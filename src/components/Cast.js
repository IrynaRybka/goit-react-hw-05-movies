// import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';

export const Cast = () => {
    const { movieId } = useParams();
    console.log(movieId)

    return (
        <div>
            <p>Actors</p>
            <Outlet/>
        </div>
    )
}