import { ReactElement } from 'react';

export const useMultiform = (steps: ReactElement[]) => {
	const [currentStepIndex, setCurrentStepIndex] = useState(0);
	//Moving  between steps
	const next = () => {
		setCurrentStepIndex((i) => {
			if (i >= steps.length - 1) return i; //thanks to this, I do not increment when I am at the last step
			return i + 1;
		});
	};
	const back = () => {
		setCurrentStepIndex((i) => {
			if (i <= 0) return i; //thanks to this, I do not decrement when I am at the last step going back
			return i - 1;
		});
	};
	const goTo = (index: number) => {
		setCurrentStepIndex(index);
	};
	return {
		currentStepIndex,
		step: steps[currentStepIndex],
		steps,
		goTo,
		next,
		back,
	};
};
