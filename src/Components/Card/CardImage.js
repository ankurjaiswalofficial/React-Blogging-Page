import React from "react";

export default function CardImage({thumbnailImage}) {
    return (
        <figure className="w-full h-[">
            <img
                className="w-full h-full object-cover"
                src={thumbnailImage}
                alt="Project"
            />
        </figure>
    );
}
