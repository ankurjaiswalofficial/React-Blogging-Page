import React from "react";
import CardImage from "./CardImage";
import CardBodyContainer from "./CardBodyContainer";

export default function Card({tagName, tagColor, title, description, creatorName, creationDate, creatorImage, thumbnailImage, flatCard=false, type2=false}) {
    return (
        <div className={`w-[30%]  flex items-start justify-between ${flatCard ? 'h-22rem flex-col' : 'h-[40rem] flex-col'} border border-gray-300 rounded-2xl overflow-hidden`}>
            <CardImage thumbnailImage={thumbnailImage} type2={type2} />
            <CardBodyContainer tagName={tagName} tagColor={tagColor} title={title} description={description} creatorName={creatorName} creatorImage={creatorImage} creationDate={creationDate} />
        </div>
    );
}
