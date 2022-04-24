interface EmojiProps {
  label?: string;
  emoji: string;
}

export default function Emoji({ label, emoji, ...props }: EmojiProps) {
  return (
    <span
      role="img"
      aria-label={label || ''}
      aria-hidden={label ? 'false' : 'true'}
      {...props}
    >
      {emoji}
    </span>
  );
}
