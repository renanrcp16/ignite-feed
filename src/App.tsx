import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

const posts = [
	{
		id: 1,
		author: {
			avatarUrl: "https://github.com/renanrcp16.png",
			name: "Renan Corrêa Pedroso",
			role: "Analista de TI"
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{ type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date('2022-11-28 20:30:45')
	},
	{
		id: 2,
		author: {
			avatarUrl: "https://github.com/diego3g.png",
			name: "Diego Fernandes",
			role: "CTO @Rocketseat"
		},
		content: [
			{ type: "paragraph", content: "Fala galeraa 👋" },
			{ type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
			{ type: "link", content: "jane.design/doctorcare" },
		],
		publishedAt: new Date('2022-11-30 06:52:39')
	},
]

function App() {
	return (
		<>
			<Header />
			<div className="max-w-[70rem] my-8 mx-auto px-4 grid md:grid-cols-[256px_1fr] auto-cols-max gap-8 items-start wrapper">
				<Sidebar />

				<main>
					{posts.map(post => {
						return (
							<Post 
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						)
					})}
				</main>
			</div>
		</>
	)
}

export default App
