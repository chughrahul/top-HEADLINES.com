import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Footer from './footer.js'

const List=(props)=>{
    
    useEffect(()=>{
        fetchItems();
        console.log()
    },[]);

    const [newsItem, setItem] = useState([]);

    const fetchItems = async() =>{
        const data = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=2f3d9463db034f769cf6935ddb07e55f');
        const newsItem = await data.json();
        console.log(newsItem.articles);
        setItem(newsItem.articles);
    };
    var saveItem;

    saveItem = (item) =>{
        console.log(item.author);
        var obj = JSON.parse(localStorage.getItem('obj'));
        obj = [];
        var activeObj = {
            'title' : item.title,
            'author' : item.author,
            'content' : item.content,
            'desc' : item.description,
            'pubAt' : item.publishedAt,
            'url' : item.url,
            'imageUrl' : item.urlToImage
        };
        obj.unshift(activeObj);
        localStorage.setItem('obj', JSON.stringify(obj));
        props.history.push(`/details/${item.url}`);
    }
    const cardStyle = {
        margin : "9px"
      };

    return(
        <div>
            <div className="container">
                <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        {newsItem.slice(0,1).map(item=>(
                            <div key={item.url} className="carousel-item active">
                                <a href="#" onClick = {e => saveItem(item) }>
                                    <img className="d-block w-100" src={item.urlToImage} alt="First news"/>
                                    <div className="carousel-caption">
                                        <h6 className="carouselHead">{item.title}</h6>
                                    </div>
                                </a>
                            </div>
                            ))}
                        {newsItem.slice(1,2).map(item=>(
                            <div key={item.url} className="carousel-item">
                                <a href="#" onClick = {e => saveItem(item) }>
                                <img className="d-block w-100" src={item.urlToImage} alt="First news"/>
                                    <div className="carousel-caption">
                                        <h6 className="carouselHead">{item.title}</h6>
                                    </div>
                                </a>
                            </div>
                        ))}
                        {newsItem.slice(2,3).map(item=>(
                            <div key={item.url} className="carousel-item">
                                <a href="#" onClick = {e => saveItem(item) }>
                                    <img className="d-block w-100" src={item.urlToImage} alt="First news"/>
                                    <div className="carousel-caption">
                                        <h6 className="carouselHead">{item.title}</h6>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                    <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <div className="newsHeadlines">
                    <h3>Top Headlines</h3>
                    <div className="row row1">
                        {newsItem.map(item =>(
                            <div key={item.url}  className="col-sm-11 col-md-5 col-lg-5" style={cardStyle}>
                                <a href="" onClick = {e => saveItem(item) }className="card-group">
                                    <img src={item.urlToImage} className="card-img-top" alt={item.title}/>
                                    <div className="card-body">
                                        <h6 className="card-title">{item.title}</h6>
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
  )
}

export default List;