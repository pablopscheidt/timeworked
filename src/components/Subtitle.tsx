export interface SubtitleProps {
    textSubtitle: string;
}

export function Subtitle({ textSubtitle } : SubtitleProps) {
  return <span className="text-sm uppercase">{textSubtitle}</span>
}