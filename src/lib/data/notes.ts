import blog from './blog';

export default blog.map((e) => ({ ...e, id: e.id + 10 }));
