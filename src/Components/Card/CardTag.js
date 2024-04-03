import React from "react";

export default function CardTag({tagName, tagColor}) {
    const colorDiv = `p-1 px-4 border-2 border-${tagColor}-600 w-fit rounded-full`;
    const span
    return (
        <div className={colorDiv}>
            <span className={`text-lg text-${tagColor}-600 font-semibold`}>{tagName}</span>
        </div>
    );
}
