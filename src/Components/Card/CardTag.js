import React from "react";

export default function CardTag({tagName, tagColor}) {
    const colorDiv = 
    return (
        <div className={}>
            <span className={`text-lg text-${tagColor}-600 font-semibold`}>{tagName}</span>
        </div>
    );
}
