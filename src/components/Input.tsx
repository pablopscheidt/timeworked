export interface InputProps {
    labelInput: string;
}

export function Input({ labelInput } : InputProps ) {
  return (
    <label className="flex relative">
        <span className="absolute top-[-23px] left-1 text-sm  px-1 whitespace-nowrap font-light text-zinc-50">{ labelInput }</span>
        <input
        type="text"
        defaultValue="00:00"
        name=""
        className="py-1 px-4 icon-time outline-none cursor-pointer w-28 text-center bg-zinc-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-500 rounded-lg text-zinc-50 z-10"
        />
    </label>
  )
}