import React from 'react'
import './appProfileCard.css'
function appProfilecard2() {
    return (
        <>
            <div className=" mb-4 d-flex justify-content-center">
                <div className="card2">
                    <div className=" image d-flex flex-column justify-content-center align-items-center">
                        <button className="btnn btnn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height="100"
                            width="100" />
                        </button> <span className="name mt-3">Eleanor Pena</span> <span className="idd">@eleanorpena</span>
                        {/* <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span
                            className="idd1">Oxc4c16a645_b21a</span> <span><i className="fa fa-copy"></i></span> </div> */}
                        <div className="text mt-3">

                            <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i
                                className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span>
                                <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span>
                            </div>
                            <div className=" px-2 rounded mt-4 date "> <span className="join">Joined May,2021</span> </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default appProfilecard2