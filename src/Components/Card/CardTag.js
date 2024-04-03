import React from "react";

export default function CardTag({tagName, tagColor}) {
    return (
        <div className={"p-1 px-4 border-2 border-slate-600 w-fit rounded-full"} sx={{}}>
            <span className={"text-lg font-semibold"} sx={{}}>{tagName}</span>
        </div>
    );
}
