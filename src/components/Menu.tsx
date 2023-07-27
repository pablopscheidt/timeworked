import { useState } from "react";

export interface MenuProps {
    onClick: () => void;

    isInitiallyOpen?: boolean;
}

export function Menu(props: MenuProps) {
    const { onClick, isInitiallyOpen } = props;
    const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);

    const handleClick = () => {
        setIsOpen((prev) => !prev);
        onClick();
    };

    return (
        <button onClick={handleClick} type="button" className={`w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer`}>
            <div className={`bg-gray-500 block w-8 h-1 rounded transition-all origin-[0px] ${ isOpen ? 'rotate-45' : 'rotate-0' }`} />
            <div className={`block w-8 h-1 rounded transition-all origin-[1px] ${ isOpen ? 'translate-x-full bg-transparent' : 'translate-x-0 bg-gray-500' }`} />
            <div className={`bg-gray-500 block w-8 h-1 rounded transition-all origin-[1px] ${ isOpen ? 'rotate-[-45deg]' : 'rotate-0' }`} />
        </button>
    );
}