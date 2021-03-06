import React from "react";

const Timeline = () => {
    return (
        <div>
            <h4 className="font-color timeline-align">Updates</h4>
            <div className="step completed">
                <div className="v-stepper">
                    <div className="circle"/>
                    <div className="line"/>
                </div>

                <div className="content icon-color">7 minutes ago
                    <p className="font-color">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>

            <div className="step completed">
                <div className="v-stepper">
                    <div className="circle"/>
                    <div className="line"/>
                </div>

                <div className="content icon-color">7 minutes ago
                    <p className="font-color">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                </div>
            </div>
        </div>
    );
};

export default Timeline;
