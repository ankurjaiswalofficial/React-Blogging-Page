import React from "react";

export default function CardImage({flatCard, thumbnailImage, type2}) {
    return (
        <figure className={`${flatCard ? 'w-1/2  h-full rounded-2xl' : 'w-full h-72'} relative`}>
            <img
                className={`w-full ${flatCard ? 'h-full rounded-2xl' : 'h-72'} object-cover`}
                src={thumbnailImage}
                alt="Project"
            />
        </figure>
    );
}
