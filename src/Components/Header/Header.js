import React from "react";
import HeaderStart from "./HeaderStart";
import HeaderCenter from "./HeaderCenter";
import HeaderEnd from "./HeaderEnd";

export default function Header() {
    return (
        <div className="w-full max-h-16 p-3 flex flex-row flex-nowrap items-center justify-between mb-16 border-b border-gray-100">
            <HeaderStart />
            <HeaderCenter />
            <HeaderEnd />
        </div>
    );
}
