import React from "react";

export default function NavigationButton({text}) {
    return (
        <button className="text-base font-medium p-2 px-4 border border-transparent hover:border-gray-100 rounded-lg transition-shadow duration-200 hover:shadow-md">
            {text}
        </button>
    );
}
