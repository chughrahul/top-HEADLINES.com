import React from 'react';
import './App.css';

function Header(){
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark" id="header">
                    <div className="navbar-brand">
                        <img style={{width:"30vw", minWidth:"200px",marginTop:"20px"}} src="https://drive.google.com/uc?export=view&id=18Q8b21wc1PSwG8F_jCWHAVQL5OC7hCsP" alt="top-HEADLINES.com" />
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#headerContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="headerContent">
                        <ul className="navbar-nav ml-auto col-11">
                            <li className="nav-item">
                               <a className="nav-link" href="https://indianexpress.com/" target="_blank">The Indian Express</a>
                            </li>
                            <li className="nav-item">
                               <a className="nav-link"  href="https://timesofindia.indiatimes.com/" target="_blank">The TOI</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.hindustantimes.com/" target="_blank">Hindustan Times</a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="https://www.indiatoday.in/news.html" target="_blank">India Today</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
 
        </div>
    );
}
export default Header;