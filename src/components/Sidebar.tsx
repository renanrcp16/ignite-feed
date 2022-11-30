import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
	return (
		<aside className="bg-gray-800 rounded-xl overflow-hidden">
			<img
				className="w-full h-[72px] object-cover"
				src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
			/>
			<div className="flex flex-col items-center mt-[-1.75rem]">
				<Avatar src="https://github.com/renanrcp16.png" />
				<strong className="mt-4 text-gray-100 leading-[1.6]">Renan Corrêa Pedroso</strong>
				<span className="text-[0.875rem] text-gray-400 leading-[1.6]">Web Developer</span>
			</div>

			<footer className="border-t-[1px] border-gray-600 mt-6 pt-6 pb-8 px-8">
				<a
					href="#"
					className="bg-transparent text-green-600 border-[1px] border-green-600 rounded-xl h-[50px] py-6 font-bold flex items-center justify-center gap-2 hover:bg-green-600 hover:text-white transition"
				>
					<PencilLine size={20} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	)
}