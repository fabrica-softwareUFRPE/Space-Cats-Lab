import {login, data} from './index';
import expectExport from 'expect';

test("testlogin" ,()  => {

expect(login('dog','cat')).toBe(true);
})