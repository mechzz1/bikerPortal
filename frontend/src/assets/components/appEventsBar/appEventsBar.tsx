import React, { useState } from 'react'
import IMAGES from '../../images/images'
import { Dialog } from 'primereact/dialog';
import AddEvent from '../../forms/addEvent/addEvent';
function appEventsBar() {
    const [visible, setVisible] = useState(false);
    return (
        <>
            <div className="feed p-2 ">
                <div className='d-flex justify-content-between'>
                    <h5 className='align-items-center'>
                        Upcomming Events
                    </h5>
                    <button type="button" className="btn btn-light" onClick={() => setVisible(true)}>Add</button>
                </div>

                <div className="card p-2" style={{ width: "18rem;" }} key={1}>

                    <img src={IMAGES.sale1} className="card-img-top" alt="..." width={80} />
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <Dialog header="Add Post" visible={visible} onHide={() => setVisible(false)}>
                <AddEvent />
            </Dialog>
        </>
    )
}

export default appEventsBar