export interface InputProps {
    labelInput: string;
}

export function Input({ labelInput } : InputProps ) {
  return (
    <label className="flex relative">
        <span className="absolute top-[-10px] left-1 text-sm bg-gray-800 px-1 whitespace-nowrap font-light">{ labelInput }</span>
        <input
        type="time"
        defaultValue="00:00"
        name=""
        className="bg-gray-800 border-gray-600 border-2 rounded py-1 px-4 icon-time outline-none cursor-pointer"
        />
    </label>
  )
}