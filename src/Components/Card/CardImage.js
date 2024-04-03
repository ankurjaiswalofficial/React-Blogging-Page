import React from "react";

export default function CardImage({thumbnailImage}) {
    return (
        <figure className="w-full h-auto">
            <img
                className="w-full h-56 object-fill"
                src={thumbnailImage}
                alt="Project"
            />
        </figure>
    );
}
