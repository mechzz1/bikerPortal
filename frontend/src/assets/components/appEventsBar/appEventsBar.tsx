import React from 'react'
import IMAGES from '../../images/images'
function appEventsBar() {
    return (
        <>
            <div className="feed p-2 ">
                <h5>
                    Upcomming Events
                </h5>
                <div className="card p-2" style={{ width: "18rem;" }} key={1}>

                    <img src={IMAGES.sale1} className="card-img-top" alt="..." width={80} />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default appEventsBar