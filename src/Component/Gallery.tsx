import React from "react";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Gallery = () => {
    return (
        <Carousel>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt="sample1" />
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC7do6BCuUFgJekCFTtJbRnV4k1S3Xvb0i9iPkUL4rB7NiPYq6TQ&s" alt="sample2"/>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScg-vlDZJRDP4aeb5NttjTOeutZvOdvMW4oxbgGdSafRuERIYm&s" alt="sample3"/>
            </div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBH8NzPx_9GzIThDPjkiBRN4OcCtfBclueMYgb2bTNzeY4KHgjDA&s" alt="sample4"/>
            </div>
        </Carousel>
    );
}

export default Gallery;
