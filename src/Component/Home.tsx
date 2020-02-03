import React from "react"
import GoogleMap from "./Map";
import Gallery from "./Gallery";
import Timeline from "./Timeline";

const Home = () => {
    const size = window.innerWidth
    const direction = size >= 1200 ? "flex" : size < 768 ? "block" : size >= 768 ? "block" : "flex"
    const offset = size >= 1200 ? "offset-md-1" : size < 768 ? "" : size >= 768 ? "" : ""
    const container = size >= 1200 ? "container" : size < 768 ? "" : size >= 768 ? "" : ""
    const width = size >= 1200 ? 250 : size < 768 ? size : size >= 768 ? size :  0
    return (
        <div className={`top-padding ${container}`}>
            <div style={{display: direction }}>
                <div>
                    <GoogleMap/>
                </div>
                <div className={`screen-color ${offset}`}>
                    <div className="left-padding">
                        <div className="row">
                            <div className="col-md-8">
                                <span className="title-color">Extreme Alert</span>
                                <p className="font-color">-2 miles away</p>
                            </div>
                            <div className="col-md-2" >
                                <span className="font-color content-font set-time">6 hours ago</span>
                            </div>
                        </div>

                        <div>
                            <div className=" header-font font-color">
                                Help us find missing 14 year old Savvanah Smith last night at Zilker Park
                            </div>
                        </div><br/>
                        <div>
                            <div>
                                <img
                                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
                                    className='rounded-img' alt='Sample'
                                    height={25} width={25}/>
                                <span className="font-color content-font">Austin Police Department</span>
                            </div>
                        </div><br/>
                        <div>
                            <div className='topic-font topic-color'>DETAILS</div>
                            <div>
                                <div className="font-color content-font">
                                    As an user I would be able to click on profile to change my display name
                                </div>
                            </div>
                        </div><br/>
                        <div className='row'>
                            <div className='col-12 topic-font topic-color'>INSTRUCTION</div>
                            <div className='col-12'>
                                <div className="font-color content-font">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s.
                                </div>
                            </div>
                        </div><br/>
                        <div className='row'>
                            <div className='col-12 topic-font topic-color'>ATTACHMENT</div>
                            <div className='col-2'>
                                <div className="rounded-corner">
                                    <i className="fa fa-file-text file-icon-color"/> <span className="font-color">Missing_Flyer.pdf</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offset-md-1" style={{width}}>
                    <Gallery/>
                    <Timeline/>
                </div>
            </div>
        </div>
    )
}

export default Home;
