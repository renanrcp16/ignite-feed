import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from "./Avatar";

export function Comment({content, onDeleteComment}) {
	function handleDeleteComment() {
		onDeleteComment(content)
	}

	return (
		<div className="mt-6 flex gap-4">
			<Avatar hasBorder={false} src="https://github.com/renanrcp16.png"/>

			<div className="flex-1">
				<div className="bg-gray-700 rounded-xl p-4">
					<header className="flex items-start justify-between">
						<div className="flex flex-col">
							<strong className="text-[0.875rem] leading-[1.6]">Renan Corrêa Pedroso</strong>
							<time title="29 de novembro às 14:43" className="text-[0.75rem] text-gray-400 leading-[1.6]" dateTime="2022-11-29 14:43:00">Cerca de 1h atrás</time>
						</div>

						<button 
							title="Deletar comentário" 
							className="bg-transparent border-0 text-gray-400 cursor-pointer leading-[0] rounded-sm hover:text-red-500"
							onClick={handleDeleteComment}
						>
							<Trash size={20} />
						</button>
					</header>

					<p className="mt-4 text-gray-300">{content}</p>
				</div>
				<footer className="mt-4">
					<button className="bg-transparent border-0 cursor-pointer text-gray-400 flex items-center hover:text-green-400 rounded-sm">
						<ThumbsUp size={24} className="mr-3" />
						Aplaudir <span className="before:content-['\2022'] before:px-1">20</span>
					</button>
				</footer>
			</div>

		</div>
	)
}