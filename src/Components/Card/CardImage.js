import React from "react";

export default function CardImage({thumbnailImage, type2}) {
    return (
        <figure className="w-full h-auto">
            <img
                className="w-full h-72 object-cover"
                src={thumbnailImage}
                alt="Project"
            />
        </figure>
    );
}
