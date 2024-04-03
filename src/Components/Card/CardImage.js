import React from "react";

export default function CardImage({flatCard, thumbnailImage, type2}) {
    return (
        <figure className={`w-full ${flatCard ? 'h-[22rem]'`h-72`} relative`}>
            <img
                className="w-full h-72 object-cover"
                src={thumbnailImage}
                alt="Project"
            />
        </figure>
    );
}
