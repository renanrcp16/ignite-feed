export function Post(props) {
	return (
		<article className="bg-gray-800 rounded-xl p-10 mt-8 first:mt-0">
			<header className="flex items-center justify-between">
				<div className="flex items-center">
					<img
						src="https://github.com/renanrcp16.png"
						className="w-12 h-12 rounded-xl border-gray-700 border-2 outline outline-2 outline-green-600 box-content mr-3 items-center"
					/>
					<div className="h-fit">
						<strong className="flex center gap-4 leading-[1.6] text-gray-100">Renan Corrêa Pedroso</strong>
						<span className="flex flex-col text-gray-400 text-[0.875rem] leading-[1.6]">Web Developer</span>
					</div>
				</div>
				<time title="29 de novembro às 14:43" className="text-[0.875rem] text-gray-400" dateTime="2022-11-29 14:43:00">Publicado há 1h</time>
			</header>
			<div className="leading-[1.6] text-gray-300 mt-6">
				<p className="mt-4">Fala galeraa 👋</p>
				<p className="mt-4">Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
				<p className="mt-4"><a className="font-bold text-green-600 hover:text-green-500" href="">jane.design/doctorcare</a></p>
				<p className="mt-4">
					<a className="font-bold text-green-600 hover:text-green-500 mr-1" href="">#novoprojeto</a>
					<a className="font-bold text-green-600 hover:text-green-500 mr-1" href="">#nlw</a>
					<a className="font-bold text-green-600 hover:text-green-500 mr-1" href="">#rocketseat</a>
				</p>
			</div>
		</article>
	)
}