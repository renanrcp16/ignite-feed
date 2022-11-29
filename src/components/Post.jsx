export function Post(props) {
	return (
		<article className="">
			<header>
				<div className="">
					<img
						src="https://github.com/renanrcp16.png"
						className="w-12 h-12 rounded-xl border-gray-700 border-2 outline outline-2 outline-green-600 box-content"
					/>
					<strong className="mt-4 text-gray-100 leading-[1.6]">Renan Corrêa Pedroso</strong>
					<span className="text-[0.875rem] text-gray-400 leading-[1.6]">Web Developer</span>
				</div>
				<time title="29 de novembro às 14:43" dateTime="2022-11-29 14:43:00">Publicado há 1h</time>
			</header>
			<div className="">
					<p>Fala galeraa 👋</p>
					<p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
					<p>👉 <a href="">jane.design/doctorcare</a></p>
					<p><a href="">#novoprojeto #nlw #rocketseat</a></p>
			</div>
		</article>
	)
}