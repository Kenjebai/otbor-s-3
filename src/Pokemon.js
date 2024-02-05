import React, { useEffect, useState } from "react";

function Pokemon(){
    const[list, setList] = useState([])
    const[list2, setList2] = useState([])
    const addList = async() => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=3")
        const data = await response.json()
        setList(data.results)
    }
    const addList2 = async() => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=10&limit=3")
        const data = await response.json()
        setList2(data.results)
    }
    
    useEffect(() => {
        addList()
        addList2()
    })
    return(
        <div>
            <h2>Pokemon</h2>
                <div className="post">
                    {list.map((el, index) => (
                        <div className="list" key={index}>
                            <img src={el.url} alt="photo" />
                            <span>{el.name}</span>
                        </div>
                    ))}
                    {list2.map((el, index) => (
                        <div className="list" key={index}>
                            <img src={el.url} alt="photo" />
                            <span>{el.name}</span>
                        </div>
                    ))}
                </div>
        </div>
    )
};

export default Pokemon
