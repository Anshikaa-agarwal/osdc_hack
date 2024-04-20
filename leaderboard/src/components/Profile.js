import React from 'react'
import {between} from './Board';

export default function Profile({ Leaderboard, period}) {
    const filteredData = period === 0 ? Leaderboard : between(Leaderboard, period);

    return (
      <div id="profile">
        {filteredData.map((item) => (
          <div key={item.id}>{/* Display your profile data here */}</div>
        ))}
      </div>
    );
}

function Item(data){
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <img src={value.img} alt="" />
            
                            <div className="info">
                                <h3 className='name text-dark'>{value.name}</h3>    
                                <span>{value.location}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <span>{value.score}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}