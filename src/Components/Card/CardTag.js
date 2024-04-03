import React from "react";

export default function CardTag({flatCard, tagName, tagColor}) {
    return (
        <div className={`${} border-2 border-slate-600 w-fit rounded-full`} style={{borderColor: `${tagColor}`}}>
            <span className={"text-lg font-semibold"} style={{color: `${tagColor}`}}>{tagName}</span>
        </div>
    );
}
