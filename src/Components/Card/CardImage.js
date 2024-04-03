import React from "react";

export default function CardImage({thumbnailImage}) {
    return (
        <figure className="w-full h-auto">
            <img
                className="w-full h-6 object-cover"
                src={thumbnailImage}
                alt="Project"
            />
        </figure>
    );
}
