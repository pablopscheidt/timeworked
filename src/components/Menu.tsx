import { useState } from "react";

export interface MenuProps {
    onClick: () => void;
}

export function Menu({ onClick } : MenuProps) {
    const [isOpen, setIsOpen] = useState<boolean>();

    const handleClick = () => {
        setIsOpen((prev) => !prev);
        onClick();
    };

    return (
        <button onClick={handleClick} type="button" className={`w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer`}>
            <div className={`bg-zinc-200 block w-8 h-0.5 rounded transition-all origin-[0px] ${ isOpen ? 'rotate-45' : 'rotate-0' }`} />
            <div className={`block w-8 h-0.5 rounded transition-all origin-[1px] ${ isOpen ? 'bg-transparent' : 'bg-zinc-200' }`} />
            <div className={`bg-zinc-200 block w-8 h-0.5 rounded transition-all origin-[1px] ${ isOpen ? 'rotate-[-45deg]' : 'rotate-0' }`} />
        </button>
    );
}