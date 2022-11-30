import {ImgHTMLAttributes} from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
	hasBorder?: boolean
}

export function Avatar({ hasBorder = true, ...props }:AvatarProps) {
	return (
		<img
			className={`w-12 h-12 rounded-xl box-content ${hasBorder ? 'outline outline-2 outline-green-600 border-gray-700 border-2' : ''}`}
			{...props}
		/>
	)
}