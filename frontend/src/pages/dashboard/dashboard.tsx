import React from 'react'
import NavBar from '../../assets/components/navBar/navBar'
import AppPostCard from '../../assets/components/appPostCard/appPostCard'
import AppProfileCard from '../../assets/components/appProfileCard/appProfileCard'
import AppEventsBar from '../../assets/components/appEventsBar/appEventsBar'
import styles from './dashboard.module.css'
function dashboard() {
    return (
        <>
            <NavBar type='basic' />
            <div className="container-fluid mt-4 mb-5">
                <div className=" row  d-flex justify-content-center">
                    <div className="col-md-3">
                        <AppProfileCard />
                    </div>
                    <div className="col-md-5 ">
                        <AppPostCard />

                    </div>
                    <div className={`col-md-3  ${styles.eventCardBg}`}>
                        <AppEventsBar/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default dashboard