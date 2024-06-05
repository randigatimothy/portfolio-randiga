import LocomotiveScroll from 'locomotive-scroll';

export const createScroll = function (_node: HTMLElement | undefined) {
	return new LocomotiveScroll({
		smooth: true,
		smartphone: {
			smooth: true,
		},
	});
};
