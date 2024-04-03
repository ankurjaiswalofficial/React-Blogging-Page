import React from "react";
import CardFooter from "./CardFooter";
import CardBody from "./CardBody";

export default function CardBodyContainer({tagName, tagColor, title, description, creatorName, creatorImage, creationDate}) {
    return (
        <div className="w-full h-full flex flex-col items-start justify-between p-3 gap-2">
            <CardBody flatCard tagName={tagName} tagColor={tagColor} title={title} description={description} />
            <CardFooter creatorName={creatorName} creatorImage={creatorImage} creationDate={creationDate} />
        </div>
    );
}
