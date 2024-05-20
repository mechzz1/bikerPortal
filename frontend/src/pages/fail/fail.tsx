import React from 'react'
import styles from './fail.module.css'
import { Link } from 'react-router-dom'
function fail() {
    return (
        <>
            <div className={`${styles.mainCon} `}>
                <div className={styles.cardSuccess}>
                    <div className={styles.test}>
                        <i className={`"checkmark ${styles.icon123} d-flex justify-content-center`} >X</i>
                    </div>
                    <h1 className={`${styles.heading} text-center`}>Fail</h1>
                    <p className={`${styles.para} text-center`}>Transaction Failed</p>
                    <Link to="/">
                        <button className='btn btn-danger mt-3'>
                            Continue
                        </button>
                    </Link>

                </div>

            </div>
        </>
    )
}

export default fail