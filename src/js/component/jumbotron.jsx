import React from "react";

const Jumbotron = (props) => {
    return (   

            <div className="container-fluid col-9 mb-3 mb-sm-0 border-0">
                <div className="card pb-3" id="jumbotronCard">
                    <div className="card-body">
                        <h1 className="card-title">{props.title}</h1>
                        <p className="card-text">{props.description}</p>
                        <a href="#" className="btn btn-primary">{props.button}</a>
                    </div>
                </div>
            </div>

    )
}

export default Jumbotron;