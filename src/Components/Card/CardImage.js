import React from "react";

export default function CardImage({thumbnailImage}) {
    return (
        <figure className="w-full max-h-[50%]">
            <img
                className="w-full h-full object-cover"
                src={thumbnailImage}
                alt="Project"
            />
        </figure>
    );
}
