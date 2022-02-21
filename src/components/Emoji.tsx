interface EmojiProps {
  label: string;
  emoji: any;
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
