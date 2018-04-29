export default {
	html: `
		<div data-a="1" data-b="2"></div>
		<div data-c="3" data-d="4"></div>
	`,

	data: {
		things: [
			{ 'data-a': 1, 'data-b': 2 },
			{ 'data-c': 3, 'data-d': 4 }
		]
	},

	test(assert, component, target) {
		const { things } = component.get();

		component.set({
			things: things.reverse()
		});

		assert.htmlEqual(target.innerHTML, `
			<div data-c="3" data-d="4"></div>
			<div data-a="1" data-b="2"></div>
		`);
	},
};