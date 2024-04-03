import React from "react";

export default function CardTag({flatCard, tagName, tagColor}) {
    return (
        <div className={`${flatCard ? 'p-2 px-8' : 'p-1 px-4'} border-2 border-slate-600 w-fit rounded-full`} style={{borderColor: `${tagColor}`}}>
            <span className={`${flatCard ? 'text-2xl' : 'text-lg'} font-semibold`} style={{color: `${tagColor}`}}>{tagName}</span>
        </div>
    );
}
