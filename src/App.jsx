import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

function App() {
  return (
    <>
		<Header/>
		<div className="max-w-[70rem] my-8 mx-auto px-4 grid md:grid-cols-[256px_1fr] auto-cols-max gap-8 items-start wrapper">
			<Sidebar/>
			
			<main>
				<Post author="Renan" content="Lorem ipsum dolor sit amet consectetur adipisicing elit."/>
			</main>
		</div>
	</>
  )
}

export default App
