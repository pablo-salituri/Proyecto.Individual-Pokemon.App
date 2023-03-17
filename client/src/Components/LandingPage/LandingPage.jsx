import React from 'react';
import { Link } from 'react-router-dom';


export default function landingPage() {
    return(
        <div>
            <h1>Esta es la Landing Page</h1>
            <Link to='/Home'>
                <button>INGRESAR</button>
            </Link>
        </div>
    )
}