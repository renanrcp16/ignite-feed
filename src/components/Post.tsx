import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

interface PostProps {
	author: {
		name: string
		role: string
		avatarUrl: string
	},
	publishedAt: Date
	content: {
		type: 'paragraph' | 'link'
		content: string
	}[]
}


export function Post({ author, publishedAt, content }:PostProps) {
	const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

	const [comments, setComments] = useState(['Que bacana!!'])
	const [newCommentText, setNewCommentText] = useState('')

	const isNewCommentEmpty = newCommentText.length === 0


	function handleCreateNewComment(event:FormEvent) {
		event.preventDefault()

		setComments([...comments, newCommentText])
		setNewCommentText('')
	}

	function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('')
		setNewCommentText(event.target.value)
	}

	function handleNewInvalidComment(event:InvalidEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('Esse campo é obrigatório!')
	}

	function deleteComment(commentToDelete:string) {
		const commentsWithoutDeletedOne = comments.filter(comment => {
			return comment !== commentToDelete
		})

		setComments(commentsWithoutDeletedOne)
	}

	return (
		<article className="bg-gray-800 rounded-xl p-10 mt-8 first:mt-0">
			<header className="flex items-center justify-between">
				<div className="flex items-center">
					<Avatar src={author.avatarUrl} />
					<div className="h-fit ml-3">
						<strong className="flex center gap-4 leading-[1.6] text-gray-100">{author.name}</strong>
						<span className="flex flex-col text-gray-400 text-[0.875rem] leading-[1.6]">{author.role}</span>
					</div>
				</div>
				<time title={publishedDateFormatted} className="text-[0.875rem] text-gray-400" dateTime={publishedAt.toLocaleString()}>{publishedDateRelativeToNow}</time>
			</header>
			<div className="leading-[1.6] text-gray-300 mt-6">
				{content.map(line => {
					if (line.type === 'paragraph') {
						return <p key={line.content} className="mt-4">{line.content}</p>
					} else if (line.type === 'link')
						return <p key={line.content} className="mt-4"><a className="font-bold text-green-600 hover:text-green-500 mr-1" href="">{line.content}</a></p>
				})}
			</div>

			<form className="w-full mt-6 pt-6 border-t-2 border-gray-600 group" onSubmit={handleCreateNewComment}>
				<strong className="leading-[1.6] text-gray-100">Deixe seu feedback</strong>
				<textarea 
					onChange={handleNewCommentChange} 
					value={newCommentText} 
					className="w-full bg-gray-900 border-0 resize-none h-24 rounded-xl text-gray-100 mt-1 leading-[1.4] p-4" 
					placeholder="Deixe seu comentário" 
					onInvalid={handleNewInvalidComment}
					required
				/>
				<footer className="invisible max-h-0 group-focus-within:visible group-focus-within:max-h-[none]">
					<button 
						className="
							px-6 py-4 mt-4 rounded-xl border-0 bg-green-600 text-white font-bold 
							cursor-pointer [&:not(:disabled)]:hover:bg-green-400 transition 
							disabled:opacity-50 disabled:cursor-not-allowed
						" 
						type="submit"
						disabled={isNewCommentEmpty}
					>
						Publicar
					</button>
				</footer>
			</form>

			<div className="mt-8">
				{comments.map(comment => {
					return(
						<Comment 
							key={comment} 
							content={comment} 
							onDeleteComment={deleteComment}
						/>
					)
				})}
			</div>
		</article>
	)
}