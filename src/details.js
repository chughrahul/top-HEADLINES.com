import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './details.css';
import Footer from './footer.js'
function Details(){
    
    useEffect(()=>{
        
        setDetails();
    },[]);
    
    const [retObj, setItem] = useState({});

    function setDetails(){
        var retObj = JSON.parse(localStorage.getItem('obj'));
        console.log(retObj[0].pubAt);
        setItem(retObj[0]);
    }

    return(
    <div>
        <div className="container-fluid">
            
            <div className="row row2">
                <div className="col-12 mt-3">
                    <div className="card">
                    <Link to={`/`} className="backButton">&#8249;</Link>
                        <div className="card-horizontal">
                            <div className="img-square-wrapper ">
                                <img className=" newsImage" src={retObj.imageUrl} alt={retObj.desc}/>
                            </div>
                            <div className="card-body">
                                <h4 className="card-title title">{retObj.title}</h4>
                                <p className="card-text author">{retObj.author}</p>
                                <p className="card-text newsDescription">{retObj.desc}</p>
                                <p className="card-text newsContent">{retObj.content} <a href={retObj.url} target="_blank">read more</a></p>                            
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Published at: {retObj.pubAt}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details;