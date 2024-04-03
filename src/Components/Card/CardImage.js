import React from "react";

export default function CardImage({thumbnailImage}) {
    return (
        <figure className="w-full h-auto">
            <img
                className="w-full h-56 object-cover bg-opacity-0"
                src={thumbnailImage}
                alt="Project"
            />
        </figure>
    );
}
