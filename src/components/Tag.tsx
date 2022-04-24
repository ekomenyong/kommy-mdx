interface TagProps {
	text: string;
}

const Tag = ({ text }: TagProps) => {
	return (
		<div className="px-2 py-1 mb-2 mr-4 text-sm font-medium tracking-wider text-gray-800 uppercase bg-gray-100 rounded last:mr-0">
			#{text}
		</div>
	);
};

export default Tag;
