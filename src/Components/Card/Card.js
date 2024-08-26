import React from "react";
import CardImage from "./CardImage";
import CardBodyContainer from "./CardBodyContainer";

export default function Card({tagName, tagColor, title, description, creatorName, creationDate, creatorImage, thumbnailImage, flatCard=false, type2=false}) {
    return (
        <div className={`flex items-start justify-between flex-grow ${flatCard ? 'flex-row w-full h-[26rem] my-12' : 'flex-col w-[30%] h-[40rem] border border-gray-200 rounded-2xl hover:shadow-xl '} overflow-hidden`}>
            <CardImage flatCard={flatCard} thumbnailImage={thumbnailImage} type2={type2} />
            <CardBodyContainer flatCard={flatCard} tagName={tagName} tagColor={tagColor} title={title} description={description} creatorName={creatorName} creatorImage={creatorImage} creationDate={creationDate} />
        </div>
    );
}
