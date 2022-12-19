import React from 'react'
import Agents from '../Agents';
import Awards from '../Awards';
import Hero from '../Hero';
import Lists from '../Lists';
import Locations from '../Locations';
import Packeges from '../Packeges';
import Properties from '../Properties';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Properties/>
            <Lists/>
            <Awards/>
            <Locations/>
            <Agents/>
            <Packeges/>
        </div>
    );
}

export default Home