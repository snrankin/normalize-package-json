import { expect } from 'chai';

import { hello } from '../src/hello';

describe('Test Example', () => {
	it('should say "Hello World!"', () => {
		const actual = hello('World');
		const expected = 'Hello World!';
		expect(actual).to.equal(expected);
	});
});
