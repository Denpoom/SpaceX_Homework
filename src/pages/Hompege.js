import React from 'react'
import clip from '../media/cut_rocket.mp4'

const Homepage = () => {
    return (
        <React.Fragment>
            <section id='home'>
                <div className="view">
                    <video id="background-video" loop autoPlay muted preload="auto" autobuffer="true" data-mobile-video >
                        <source src={clip} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="overlay">
                        <p>Rockets</p>
                        <h6>รวบรวมจรวดทั้งหมดของ SpaceX และรายละเอียดของจรวดแต่ละชนิด</h6>
                        <h6>รวมถึงข้อมูลการใช้งานของจรวดนั้นๆ</h6>
                        <button type="button" className="btn btn-outline-light waves-effect my-2 btn-lg "><i className="fas fa-rocket">  See more</i></button>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Homepage