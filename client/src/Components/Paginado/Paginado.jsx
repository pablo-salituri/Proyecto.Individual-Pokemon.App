import React from "react";

export default function Paginado({cantDePaginas, goToPage, currentPage}) {
    
    const arrayDePaginas = [];
    for (let i = 1; i <= cantDePaginas; i++)
        arrayDePaginas.push(i)
    //console.log(goToPage);
    return (
        <div>    
            <button disabled={currentPage===1} onClick={() => goToPage(currentPage-1)}>Prev</button>
            {    
                arrayDePaginas.map(num => 
                    <button disabled={currentPage===num} key={num} onClick={() => goToPage(num)}>{num}</button>
                )
            }
            <button disabled={currentPage===cantDePaginas} onClick={() => goToPage(currentPage+1)}>Siguiente</button>   
        </div>
    )
}