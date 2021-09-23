import React from 'react'
import '../styles/DogsList.css'

const DogsList = ({ dogList }) => {
    return (
        <>
            {dogList.map((dog) => (
                <div className="dogs-container">
                    <div className="dog-item">
                        <img src={dog} id="dog-img" alt="dog img" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default DogsList
