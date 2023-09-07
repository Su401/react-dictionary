import './App.css';
import Dictionary from './Dictionary';

export default function App() {
	return (
		<div className='App'>
			<div className='container-fluid'>
				<header className='App-header'>
					<h1>Hello World!</h1>
				</header>
				<Dictionary />
				<footer>
					<small>
						This page was coded by{' '}
						<a href='https://www.linkedin.com/in/susana-silva-/'>
							Susana Silva
						</a>
						, is open-sourced on{' '}
						<a href='https://github.com/Su401/react-dictionary'>
							GitHub
						</a>{' '}
						and hosted on{' '}
						<a href='https://react-dictionari.netlify.app/'>
							Netlify
						</a>
						.
					</small>
				</footer>
			</div>
		</div>
	);
}
