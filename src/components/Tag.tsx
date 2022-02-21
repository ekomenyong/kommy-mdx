interface TagProps {
  text: string;
}

const Tag = ({ text }: TagProps) => {
  return (
    <span className="px-2 py-1 mb-2 mr-2 text-sm font-medium tracking-widest uppercase rounded bg-primary-50 text-primary-600 last:mr-0 dark:bg-gray-700 dark:text-gray-100">
      #{text.split(' ').join('-')}
    </span>
  );
};

export default Tag;
