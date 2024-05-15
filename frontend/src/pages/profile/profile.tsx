import React from 'react'
import AppPostCard from '../../assets/components/appPostCard/appPostCard'
import AppProfileCard from '../../assets/components/appProfileCard/appProfileCard'
import AppEventsBar from '../../assets/components/appEventsBar/appEventsBar'
function profile() {
    return (
        <>
            <div className="container-fluid mt-4 mb-5">
                <div className=" row  d-flex justify-content-center">
                    <div className="col-md-3">
                        <AppProfileCard />
                    </div>
                    <div className="col-md-5 ">
                        <AppPostCard />

                    </div>
                    {/* <div className={`col-md-3  ${styles.eventCardBg}`}>
                        <AppEventsBar />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default profile