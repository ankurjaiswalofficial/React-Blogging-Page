import React from "react";

export default function CardTag({flatCard, tagName, tagColor}) {
    return (
        <div className={""} style={{borderColor: `${tagColor}`}}>
            <span className={"text-lg font-semibold"} style={{color: `${tagColor}`}}>{tagName}</span>
        </div>
    );
}
