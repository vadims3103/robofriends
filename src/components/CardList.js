import React from 'react';
import Card from "./Card";

const CardList = ({ robots }) => {
    // if (true) {
    //     throw new Error('Nooo!')
    // }

    return (
        <div className='pa3'>
            {robots.map(robot => <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} city={robot.address.city}/>)}
        </div>
    );
};

export default CardList;