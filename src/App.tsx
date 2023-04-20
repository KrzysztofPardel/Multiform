import { useMultiform } from './useMultiform';

const App = () => {
	const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = useMultiform([
		<div>One</div>,
		<div>Two</div>,
	]);
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
					{step}
					<div
						style={{
							marginTop: '1rem',
							display: 'flex',
							gap: '0.5rem',
							justifyContent: 'flex-end',
						}}>
						{/* //Logic that prevents this button from being shown on the first page */}
						{!isFirstStep && (
							<button type='button' onClick={back}>
								Back
							</button>
						)}
						{/* //Logic that prevents me from seeing this button on the last page */}
						<button type='button' onClick={next}>
							{isLastStep ? 'Finish' : 'Next'}
						</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default App;
