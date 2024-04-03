import React from "react";

export default function CardImage({flatCard, thumbnailImage, type2}) {
    return (
        <figure className={`w-full ${flatCard ? 'h-[26rem] rounded-2xl' : 'h-72'} relative`}>
            <img
                className={`w-full ${flatCard ? 'h-[22rem] rounded-2xl' : 'h-72'} object-cover`}
                src={thumbnailImage}
                alt="Project"
            />
        </figure>
    );
}
