import React from 'react'
import styles from './success.module.css'
import { Link } from 'react-router-dom'
function success() {
    return (
        <>
            <div className={`${styles.mainCon} `}>
                <div className={styles.cardSuccess}>
                    <div className={styles.test}>
                        <i className={`"checkmark ${styles.icon123} d-flex justify-content-center`} >✓</i>
                    </div>
                    <h1 className={`${styles.heading} text-center`}>Success</h1>
                    <p className={`${styles.para} text-center`}>We received your purchase request;<br /> we'll be in touch shortly!</p>
                    <Link to="/">
                        <button className='btn btn-success mt-3'>
                            Continue
                        </button>
                    </Link>
                </div>

            </div>

        </>
    )
}

export default success