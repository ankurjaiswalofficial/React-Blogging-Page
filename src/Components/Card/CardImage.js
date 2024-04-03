import React from "react";

export default function CardImage({flatCard, thumbnailImage, type2}) {
    return (
        <figure className={``}>
            <img
                className="w-full h-72 object-cover"
                src={thumbnailImage}
                alt="Project"
            />
        </figure>
    );
}
