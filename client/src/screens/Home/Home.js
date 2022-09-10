import React, {useEffect} from 'react';

const Home = (props) => {
    useEffect(() => {
        console.log('Home useEffect.');
    });
    return (
        <div className={'Home'}>
            <h1>Hello there!</h1>
        </div>
    );
};

export default Home;