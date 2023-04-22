import { useState } from 'react';
import { FormEvent } from 'react';
import { AccountForm } from './AccountForm';
import { AddressForm } from './AddressForm';
import { UserForm } from './UserForm';
import { useMultiform } from './useMultiform';
type FormData = {
	firstName: string;
	lastName: string;
	age: string;
	street: string;
	city: string;
	state: string;
	zip: string;
	email: string;
	password: string;
};
const INITIAL_DATA: FormData = {
	firstName: '',
	lastName: '',
	age: '',
	street: '',
	city: '',
	state: '',
	zip: '',
	email: '',
	password: '',
};
const App = () => {
	const [data, setData] = useState(INITIAL_DATA);

	const updateFields = (fields: Partial<FormData>) => {
		setData((prev) => {
			return { ...prev, ...fields };
		});
	};

	const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } = useMultiform([
		<UserForm {...data} updateFields={updateFields} />,
		<AddressForm {...data} updateFields={updateFields} />,
		<AccountForm {...data} updateFields={updateFields} />,
	]);
	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (!isLastStep) return next();
		alert('Successful Account Creation');
	};
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
					maxWidth: 'max-content',
				}}>
				<form onSubmit={onSubmit}>
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
						<button type='submit'>{isLastStep ? 'Finish' : 'Next'}</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default App;
