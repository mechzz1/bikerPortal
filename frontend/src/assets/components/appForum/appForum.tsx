import React, { useState } from 'react'
import './appForum.css'
import PostInfo from '../../../models/postInfo'
import dateFormat from 'dateformat'

interface props {
    data: PostInfo[]
}
function appForum({ data }: props) {
    return (
        <>
            {
                data.map((item, index) =>
                    <div className="card1 bg-light" key={index}>
                        <div className="username pb-2">Topic: {item.topic}</div>

                        <div className="card-header1">
                            <div className="user-info d-flex">
                                <div className="initial-circle">J</div>
                                <div className="username align-items-center d-flex pl-2">{item.name}</div>
                            </div>
                            <span className="timestamp">{dateFormat(item.createdAt, "mediumDate")}</span>
                        </div>
                        <div className="message">
                            {
                                item.question
                            }
                        </div>
                    </div>

                )
            }

        </>
    )
}

export default appForum