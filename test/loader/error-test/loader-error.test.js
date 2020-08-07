'use strict';

// eslint-disable-next-line node/no-unpublished-require
const { run } = require('../../utils/test-utils');

describe('loader error regression test for #1581', () => {
    it(`should not ignore loader's error produce a failing build`, () => {
        const { stderr, stdout } = run(__dirname, [], false);
        expect(stderr).toBeFalsy();
        expect(stdout).toContain('[1 error]');
        expect(stdout).toContain(`Cannot assign to 'foobar' because it is a constant`);
    });
});
