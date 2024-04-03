import React from "react";
import CardFooter from "./CardFooter";
import CardBody from "./CardBody";

export default function CardBodyContainer({flatCard, tagName, tagColor, title, description, creatorName, creatorImage, creationDate}) {
    return (
        <div className="">
            <CardBody flatCard={flatCard} tagName={tagName} tagColor={tagColor} title={title} description={description} />
            <CardFooter creatorName={creatorName} creatorImage={creatorImage} creationDate={creationDate} />
        </div>
    );
}
