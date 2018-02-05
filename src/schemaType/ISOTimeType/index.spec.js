/* eslint-disable no-underscore-dangle */
import { assert } from 'chai';
import { stub } from 'sinon';
import ISOTimeType, { __RewireAPI__ as RewireAPI } from './';

describe('ISOTimeType', () => {
	describe('constructor', () => {
		it("should set _isDbInMs to true if dbFormat is 'ms'", () => {
			const isoTimeType = new ISOTimeType({ path: '1', dbFormat: 'ms' });
			assert.isTrue(isoTimeType._isDbInMs);
		});

		it('should set _isDbInMs to false if dbFormat is not specified', () => {
			const isoTimeType = new ISOTimeType({ path: '1' });
			assert.isFalse(isoTimeType._isDbInMs);
		});

		it("should set _isDbInMs to false if dbFormat is anything other than 'ms'", () => {
			const isoTimeType = new ISOTimeType({ path: '1', dbFormat: 'foo' });
			assert.isFalse(isoTimeType._isDbInMs);
		});
	});

	describe('instance methods', () => {
		describe('transformFromDb', () => {
			let isoTimeType;
			const add = stub().returnsThis();
			const moment = stub().returns({
				startOf: stub().returnsThis(),
				format: stub().returnsThis(),
				add,
			});
			before(() => {
				isoTimeType = new ISOTimeType({ path: '1' });
				RewireAPI.__Rewire__('moment', moment);
			});

			after(() => {
				RewireAPI.__ResetDependency__('moment');
			});

			beforeEach(() => {
				isoTimeType._isDbInMs = false;
				add.resetHistory();
			});

			it('should throw if value is not an integer', () => {
				assert.throws(isoTimeType.transformFromDb.bind(isoTimeType, 'foo'));
			});

			it('should throw if value is less than zero', () => {
				assert.throws(isoTimeType.transformFromDb.bind(isoTimeType, -1));
			});

			it('should throw if _isDbInMs is true and value is greater than 86400000', () => {
				isoTimeType._isDbInMs = true;
				assert.throws(isoTimeType.transformFromDb.bind(isoTimeType, 86400001));
			});

			it('should throw if _isDbInMs is true and value is greater than 86400', () => {
				isoTimeType._isDbInMs = false;
				assert.throws(isoTimeType.transformFromDb.bind(isoTimeType, 86401));
			});

			it('should add the number of milliseconds specified by value to the moment', () => {
				isoTimeType._isDbInMs = true;
				isoTimeType.transformFromDb(1000);
				assert.isTrue(add.calledWith(1000, 'milliseconds'));
			});

			it('should add the number of seconds specified by value to the moment', () => {
				isoTimeType._isDbInMs = false;
				isoTimeType.transformFromDb(1000);
				assert.isTrue(add.calledWith(1000, 'seconds'));
			});
		});
	});
});
