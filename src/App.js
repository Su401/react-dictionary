import './css/App.css';
import Dictionary from './Dictionary';

export default function App() {
	return (
		<div className='App'>
			<div className='container-fluid'>
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
						<a href='https://app.netlify.com/teams/su401/overview'>
							Netlify
						</a>
						.
					</small>
				</footer>
			</div>
		</div>
	);
}
