import React from 'react';

const Moviecard = ({ data }) => {
    return (
        <>
            <div>
                <img src={data?.Poster} alt={data?.Poster} />
            </div>
            <div>{data?.Title}</div>
        </>

    );
};

export default Moviecard;