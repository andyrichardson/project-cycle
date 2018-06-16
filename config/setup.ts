// tslint:disable
// @ts-ignore
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// @ts-ignore
global.fetch = jest.fn().mockResolvedValue(true);
