import React from 'react';
import './App.css';

function Footer(){
    return (
        <footer id="footer">
            <div className="row">
                <p className="col-lg-3 col-sm-12 headline">Read today's Newspapers</p>
                <a href="https://epaper.hindustantimes.com/Home/ArticleView" target="_blank" className="col-lg-2 col-sm-12 parts">
                Hindustan Times
                </a>
                <a href="https://epaper.timesgroup.com/TOI/TimesOfIndia/index.html?a=c#" target="_blank" className="col-lg-1 col-sm-12 parts">
                The TOI
                </a>
                <a href="https://indianexpress.com/express-plus/subscription-plan/" target="_blank" className="col-lg-2 col-sm-12 parts">
                Indian Express
                </a>
                <a href="https://epaper.thehindu.com/" target="_blank" className="col-lg-1 col-sm-12 parts">
                The Hindu
                </a>
                <div className="col-lg-3 col-sm-12 copyright">
                &copy; July 2020 -- Rahul Chugh.
                </div>
          </div>
        </footer>
    );
}

export default Footer;