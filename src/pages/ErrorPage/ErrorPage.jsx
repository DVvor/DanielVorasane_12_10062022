import './ErrorPage.css';
import React from 'react'


function ErrorPage() {
    return (
    <>
        <div className="main-errorpage">
            <span className='error-number'>404</span>
            <p className='message-errorpage'>Oups! La page que vous demandez n'existe pas.</p>
        </div>

        {/* <div className="btn-return">
            <Link to="/About" className='link-return-home'>Retourner sur la page d’accueil</Link>
        </div> */}
    </>
    )

}

export default ErrorPage