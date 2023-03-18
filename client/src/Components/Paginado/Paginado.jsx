import React from "react";

export default function Paginado({cantDePaginas, goToPage}) {
    
    const arrayDePaginas = [];
    for (let i = 1; i <= cantDePaginas; i++)
        arrayDePaginas.push(i)
    //console.log(goToPage);
    return (
        <div>
            <ul>
            {    
                arrayDePaginas.map(num => (
                    //console.log(num);
                    <ul key={num}>
                        <button onClick={() => goToPage(num)}>{num}</button>
                    </ul>
                ))
            }
            </ul>      
        </div>
    )
}