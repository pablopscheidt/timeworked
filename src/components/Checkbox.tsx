import { useState } from 'react';

export interface CheckboxProps {
    labelCheckbox: string;
    IdCheckbox: string;
}

export function Checkbox({ labelCheckbox, IdCheckbox } : CheckboxProps ) {
    const [isChecked, setIsChecked] = useState(false);
    const uncheckIconSize = 0;
    const checkedIconSize = 15;
    const iconSize = isChecked ? checkedIconSize : uncheckIconSize;
    
  return (
    <label id="checkLabel" className="flex items-center gap-2 cursor-pointer w-fit">
        <input
            type="checkbox"
            id={IdCheckbox}
            className="hidden"
            onChange={(e) => setIsChecked(e.target.checked)}
        />
        <div className="w-5 h-5 rounded border-zinc-500 border-2 flex items-center justify-center">
            <svg
                className="transition-all"
                height={iconSize}
                viewBox="0 0 18 15"
                width={iconSize}
            >
                <path d="M6,10.2 L1.8,6 L0.4,7.4 L6,13 L18,1 L16.6,-0.4 L6,10.2 Z" className="fill-zinc-300" />
            </svg>
        </div>
        <span>{labelCheckbox}</span>
    </label>
  )
}