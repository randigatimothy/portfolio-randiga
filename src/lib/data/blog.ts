import { faker } from '@faker-js/faker';

export default Array.from({ length: 10 }).map(() => {
	return {
		id: faker.word.noun().toLowerCase(),
		title: faker.lorem.sentence(),
		date: faker.date.past().toDateString(),
		image: `https://picsum.photos/id/${faker.number.int({ min: 1, max: 1000 })}/400/300`,
		caption: faker.lorem.paragraph(),
	};
});
