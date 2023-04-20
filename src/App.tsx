import { useMultiform } from './useMultiform';

const App = () => {
	const { steps, currentStepIndex } = useMultiform([<div className=''>One</div>, <div className=''>Two</div>]);
	return (
		<>
			<div
				className=''
				style={{
					position: 'relative',
					background: 'white',
					border: '1px solid black',
					padding: '2rem',
					margin: '1rem',
					borderRadius: '1.5rem',
					fontFamily: 'Arial',
				}}>
				<form action='' className=''>
					<div className='' style={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}>
						{currentStepIndex + 1}/{steps.length}
					</div>
				</form>
			</div>
		</>
	);
};

export default App;
