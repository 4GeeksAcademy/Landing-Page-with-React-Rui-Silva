import React from "react";

const Cards = (props) => {
    return (
        <div className="container-fluid col-9 mt-4">
            <div class="row row-cols-1 row-cols-md-4 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src={props.url} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title text-center">{props.title}</h5>
                            <p class="card-text text-center" id="cardText">{props.content}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href="#" class="btn btn-primary">{props.button}</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={props.url1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title text-center">{props.title}</h5>
                            <p class="card-text text-center" id="cardText">{props.content1}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href="#" class="btn btn-primary">{props.button}</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={props.url2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title text-center">{props.title}</h5>
                            <p class="card-text text-center" id="cardText">{props.content2}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href="#" class="btn btn-primary">{props.button}</a>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={props.url3} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title text-center">{props.title}</h5>
                            <p class="card-text text-center" id="cardText">{props.content3}</p>
                        </div>
                        <div class="card-footer text-center">
                            <a href="#" class="btn btn-primary">{props.button}</a>
                        </div>
                    </div>
                </div>
               
                
            </div>
        </div>
    )
}

export default Cards;