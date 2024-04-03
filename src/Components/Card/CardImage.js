import React from "react";

export default function CardImage({thumbnailImage, typ}) {
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
