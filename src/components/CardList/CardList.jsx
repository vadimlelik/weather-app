import React from 'react';
import Card from "../Card";

const CardList = ({citiesList,dispatch}) => {
    return (
        <div className='CardLIst'>
            {
                citiesList.map((cities)=> {
                    return(<Card key={cities} cities={cities} dispatch={dispatch}/>)
                })
            }
        </div>
    );
};

export default CardList;