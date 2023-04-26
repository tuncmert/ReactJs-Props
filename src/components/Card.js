import React from 'react'

export default function Card(props) {
    return (
        <div className='col'>
            <div className="card mt-2" style={{ width: 18 + "rem" }}>
                <img className="card-img-top" src="" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.features.count}</h5>
                    <p className="card-text">{props.features.name}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}
