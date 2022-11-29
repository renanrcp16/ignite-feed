export function Avatar({ hasBorder = true, src }) {
	return (
		<img
			className={`w-12 h-12 rounded-xl box-content ${hasBorder ? 'outline outline-2 outline-green-600 border-gray-700 border-2' : ''}`}
			src={src}
		/>
	)
}