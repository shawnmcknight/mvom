/* eslint-disable no-underscore-dangle */
import { assert } from 'chai';
import { stub } from 'sinon';
import EmbeddedType, { __RewireAPI__ as RewireAPI } from './';

describe('EmbeddedType', () => {
	const Schema = class {};
	before(() => {
		RewireAPI.__Rewire__('Schema', Schema);
	});

	after(() => {
		RewireAPI.__ResetDependency__('Schema');
	});

	describe('constructor', () => {
		it('should throw when valueSchema is not an instance of Schema', () => {
			assert.throws(() => new EmbeddedType('foo'));
		});

		it('should set _valueSchemaType instance member', () => {
			const embeddedType = new EmbeddedType(new Schema());
			assert.instanceOf(embeddedType._valueSchema, Schema);
		});
	});

	describe('instance methods', () => {
		const Document = class {
			constructor(schema, record) {
				this._schema = schema;
				this._record = record;
			}
		};
		let embeddedType;
		before(() => {
			RewireAPI.__Rewire__('Document', Document);
			embeddedType = new EmbeddedType(new Schema());
		});

		after(() => {
			RewireAPI.__ResetDependency__('Document');
		});

		describe('get', () => {
			it('should return a newly instantiated Document using instance schema and passed record', () => {
				const getValue = embeddedType.get('foo');
				assert.instanceOf(getValue._schema, Schema);
				assert.strictEqual(getValue._record, 'foo');
			});
		});

		describe('set', () => {
			it('should return an array of contents based on what is returned from transformDocumentToRecord', () => {
				const transformDocumentToRecord = stub().returns(['foo', 'bar']);
				assert.deepEqual(embeddedType.set([], { transformDocumentToRecord }), ['foo', 'bar']);
			});

			it('should not mutate the original record contents if the subdocument does not return a value', () => {
				const transformDocumentToRecord = stub().returns([undefined, 'bar', 'baz']);
				assert.deepEqual(embeddedType.set(['foo'], { transformDocumentToRecord }), [
					'foo',
					'bar',
					'baz',
				]);
			});
		});
	});
});
