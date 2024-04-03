import React from "react";

export default function CardFooter({creatorName, creatorImage, creationDate}) {
    return (
        <div className="flex flex-row items-center justify-start gap-2 p-3">
            <figure>
                <img
                    className="rounded-full overflow-hidden w-16 h-16 object-cover"
                    src={creatorImage}
                    alt="Person"
                />
            </figure>
            <div className="flex flex-col items-start justify-start gap-0.5">
                <h6 className="text-lg font-bold">{creatorName}</h6>
                <h6 className="text-base font-normal">{creationDate}</h6>
            </div>
        </div>
    );
}
