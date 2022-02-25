interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return (
    <span className="px-2 py-1 mb-2 mr-4 text-sm font-medium tracking-wider uppercase rounded bg-primary-50 text-primary-500 last:mr-0 dark:bg-gray-700 dark:text-gray-200">
      #{text}
    </span>
  );
};

export default Tag;
