import React from "react";
import CardTag from "./CardTag";

export default function CardBody(tagName, tagColor, title, description) {
    return (
        <div className="flex flex-col items-start justify-center gap-3 p-3">
            <CardTag tagName={tagName} tagColor={tagColor} />
            <h5 className="font-bold text-2xl">
                {title}
            </h5>
            <p className="font-normal text-xl">
                {description}
            </p>
        </div>
    );
}
