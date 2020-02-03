import React from "react"
import GoogleMap from "./Map";
import Gallery from "./Gallery";
import Timeline from "./Timeline";
import {homeView} from "../GlobalUtils/helper";

const Home = () => {
    const data = homeView(window.innerWidth)
    return (
        <div className={`top-padding ${data && data.container}`}>
            <div style={{display: data && data.direction }}>
                <div>
                    <GoogleMap/>
                </div>
                <div className={`screen-color ${data && data.offset}`}>
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
                                    height={25} width={25} />
                                <span className="font-color content-font align-name">Austin Police Department</span>
                            </div>
                        </div><br/><br/>
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
                                    <i className="fa fa-file-text icon-color"/> <span className="font-color">Missing_Flyer.pdf</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offset-md-1" style={{width: data && data.width}}>
                    <Gallery/>
                    <Timeline/>
                </div>
            </div>
        </div>
    )
}

export default Home;
