import React from "react";
import CardImage from "./CardImage";
import CardBodyContainer from "./CardBodyContainer";

export default function Card({flatCard, tagName, tagColor, title, description, creatorName, creationDate, creatorImage, thumbnailImage, type2=false}) {
    return (
        <div className={`w-[30%] h-[40rem] border border-gray-300 rounded-2xl overflow-hidden flex items-start justify-between flex-col`}>
            <CardImage thumbnailImage={thumbnailImage} type2={type2} />
            <CardBodyContainer tagName={tagName} tagColor={tagColor} title={title} description={description} creatorName={creatorName} creatorImage={creatorImage} creationDate={creationDate} />
        </div>
    );
}
