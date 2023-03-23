import React from "react";
import styles from './Paginado.module.css';

export default function Paginado({cantDePaginas, goToPage, currentPage}) {
    
    const arrayDePaginas = [];
    for (let i = 1; i <= cantDePaginas; i++)           
        arrayDePaginas.push(i)
    //console.log(goToPage);
    return (
        <div className={styles.paginadoDiv}>    
            <button className={styles.botones} disabled={currentPage===1} onClick={() => goToPage(currentPage-1)}>{'<'}</button>
            {    
                arrayDePaginas.map(num => 
                    <button className={styles.botones} disabled={currentPage===num} key={num} onClick={() => goToPage(num)}>{num}</button>
                )
            }
            <button className={styles.botones} disabled={currentPage===cantDePaginas} onClick={() => goToPage(currentPage+1)}>{'>'}</button>   
        </div>
    )
}