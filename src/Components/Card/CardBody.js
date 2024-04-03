import React from "react";
import CardTag from "./CardTag";

export default function CardBody({flatCard, tagName, tagColor, title, description}) {
    return (
        <div className={`flex flex-col items-start justify-center ${flatCard ? '' : 'gap-3'} p-3`}>
            <CardTag flatCard={flatCard} tagName={tagName} tagColor={tagColor} />
            <h5 className={`font-bold ${flatCard ? 'text-4xl' : 'text-2xl'}`}>
                {title}
            </h5>
            <p className={`font-normal ${flatCard ? 'text-2xl' : 'text-xl'}`}>
                {description}
            </p>
        </div>
    );
}
