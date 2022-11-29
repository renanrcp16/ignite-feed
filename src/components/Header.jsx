import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
	return(
		<header className="bg-gray-800 text-white flex justify-center py-5">
			<img className='h-10' src={igniteLogo} alt="Logo do Ignite"></img>
		</header>
	)
}