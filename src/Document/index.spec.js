/* eslint-disable no-underscore-dangle */
import { assert } from 'chai';
import { stub } from 'sinon';
import Schema from 'Schema';
import Document, { __RewireAPI__ as RewireAPI } from './';

describe('Document', () => {
	class InvalidParameterError extends Error {}
	class TransformDataError extends Error {}
	before(() => {
		RewireAPI.__Rewire__('InvalidParameterError', InvalidParameterError);
		RewireAPI.__Rewire__('TransformDataError', TransformDataError);
	});

	after(() => {
		RewireAPI.__ResetDependency__('InvalidParameterError');
		RewireAPI.__ResetDependency__('TransformDataError');
	});

	describe('constructor', () => {
		const SchemaRewire = class {
			paths = {};
		};
		before(() => {
			RewireAPI.__Rewire__('Schema', SchemaRewire);
		});

		after(() => {
			RewireAPI.__ResetDependency__('Schema');
		});

		it('should throw InvalidParameterError if Schema instance is not provided', () => {
			assert.throws(() => new Document('foo'), InvalidParameterError);
		});

		it('should throw InvalidParameterError if passed data is not an object', () => {
			assert.throws(() => new Document(new SchemaRewire(), 'foo'), InvalidParameterError);
		});

		it('should set the expected instance properties', () => {
			const document = new Document(new SchemaRewire());
			assert.instanceOf(document._schema, SchemaRewire);
		});

		it('should have an empty array as the default value for _record', () => {
			const document = new Document(new SchemaRewire());
			assert.instanceOf(document._schema, SchemaRewire);
			assert.deepEqual(document._record, []);
		});
	});

	describe('instance methods', () => {
		describe('transformDocumentToRecord', () => {
			const get = stub();
			const set = stub();
			const SchemaRewire = class {
				paths = {
					foo: {
						get,
						set,
					},
					bar: {
						get,
						set,
					},
				};
			};
			let document;

			before(() => {
				RewireAPI.__Rewire__('assignIn', stub());
				RewireAPI.__Rewire__('Schema', SchemaRewire);
				document = new Document(new SchemaRewire());
			});

			beforeEach(() => {
				delete document.foo;
				delete document.bar;
				set.reset();
			});

			after(() => {
				RewireAPI.__ResetDependency__('assignIn');
				RewireAPI.__ResetDependency__('Schema');
			});

			it('should call the schemaType setter for each property in the document referenced in the schema', () => {
				document.foo = 'foo';
				document.bar = 'bar';
				document.transformDocumentToRecord();
				assert.strictEqual(set.args[0][1], 'foo');
				assert.strictEqual(set.args[1][1], 'bar');
			});

			it('should return an array of the results from calling the schemaType setters', () => {
				set.onCall(0).returns(['foo']);
				set.onCall(1).returns(['foo', 'bar']);
				assert.deepEqual(document.transformDocumentToRecord(), ['foo', 'bar']);
			});

			it('should call the first setter with the original record when not a subdocument', () => {
				document._record = ['foo', 'bar'];
				document.transformDocumentToRecord();
				assert.deepEqual(set.args[0][0], ['foo', 'bar']);
			});

			it('should call the first setter with an empty array when a subdocument', () => {
				const subdocument = new Document(new SchemaRewire(), {}, { isSubdocument: true });
				subdocument._record = ['foo', 'bar'];
				subdocument.transformDocumentToRecord();
				assert.deepEqual(set.args[0][0], []);
			});
		});

		describe('validate', () => {
			const cast = stub();
			const get = stub();
			const validate = stub();
			const SchemaRewire = class {
				paths = {
					foo: {
						cast,
						get,
						validate,
					},
					bar: {
						cast,
						get,
						validate,
					},
				};
			};
			let document;

			before(() => {
				RewireAPI.__Rewire__('Schema', SchemaRewire);
				document = new Document(new SchemaRewire());
			});

			beforeEach(() => {
				delete document.foo;
				delete document.bar;
				cast.resetHistory();
				validate.reset();
			});

			after(() => {
				RewireAPI.__ResetDependency__('Schema');
			});

			describe('successful cast', () => {
				before(() => {
					cast.returnsArg(0);
				});

				after(() => {
					cast.reset();
				});

				it('should call the schemaType cast method for each property in the document referenced in the schema', async () => {
					validate.returns([]);
					document.foo = 'foo';
					document.bar = 'bar';
					await document.validate();
					assert.strictEqual(cast.args[0][0], 'foo');
					assert.strictEqual(cast.args[1][0], 'bar');
				});

				it('should call the schemaType validate method for each property in the document referenced in the schema', async () => {
					validate.returns([]);
					document.foo = 'foo';
					document.bar = 'bar';
					await document.validate();
					assert.strictEqual(validate.args[0][0], 'foo');
					assert.strictEqual(validate.args[1][0], 'bar');
				});

				it('should return all errors returned by the schemaType validator', async () => {
					validate.onCall(0).returns(['def', 'henk']);
					validate.onCall(1).returns(['mos', 'thud']);
					document.foo = 'foo';
					document.bar = 'bar';
					const documentErrors = await document.validate();
					assert.deepEqual(documentErrors, { foo: ['def', 'henk'], bar: ['mos', 'thud'] });
				});
			});

			describe('failed cast', () => {
				before(() => {
					cast.throws('errorName', 'errorMessage');
				});

				after(() => {
					cast.reset();
				});

				it('should return the error message as throw by the failed cast', async () => {
					document.foo = 'foo';
					document.bar = 'bar';
					const documentErrors = await document.validate();
					assert.deepEqual(documentErrors, { foo: 'errorMessage', bar: 'errorMessage' });
				});
			});
		});

		describe('transformRecordToDocument', () => {
			describe('stubbed tests', () => {
				const get = stub();
				const setIn = stub();
				const SchemaRewire = class {
					paths = {
						foo: {
							get,
						},
						bar: {
							get,
						},
					};
				};
				let document;

				before(() => {
					RewireAPI.__Rewire__('assignIn', stub());
					RewireAPI.__Rewire__('setIn', setIn);
					RewireAPI.__Rewire__('Schema', SchemaRewire);
					document = new Document(new SchemaRewire());
				});

				beforeEach(() => {
					document._record.length = 0; // reset to empty array
					document.transformationErrors.length = 0; // reset to empty array
					get.reset();
					setIn.resetHistory();
				});

				after(() => {
					RewireAPI.__ResetDependency__('assignIn');
					RewireAPI.__ResetDependency__('setIn');
					RewireAPI.__ResetDependency__('Schema');
				});

				it('should throw InvalidParameterError is record is not passed', () => {
					assert.throws(() => {
						document.transformRecordToDocument();
					}, InvalidParameterError);
				});

				it('should throw InvalidParameterError is record is not an array', () => {
					assert.throws(() => {
						document.transformRecordToDocument('foo');
					}, InvalidParameterError);
				});

				it('should get from the schemaType instance using the passed record property', () => {
					const record = ['foo', 'bar', 'baz'];
					document.transformRecordToDocument(record);
					assert.isTrue(get.calledWith(record));
					assert.isTrue(get.calledTwice);
				});

				it("should set at the schema's keypath with the value from get", () => {
					get.returns('baz');
					document.transformRecordToDocument([]);
					assert.isTrue(setIn.calledTwice);
					assert.strictEqual(setIn.args[0][1], 'foo');
					assert.strictEqual(setIn.args[0][2], 'baz');
					assert.strictEqual(setIn.args[1][1], 'bar');
					assert.strictEqual(setIn.args[1][2], 'baz');
				});

				it("should set null at the schema's keypath if get throws with TransformDataError", () => {
					get.throws(new TransformDataError());
					document.transformRecordToDocument([]);
					assert.isTrue(setIn.calledTwice);
					assert.strictEqual(setIn.args[0][1], 'foo');
					assert.isNull(setIn.args[0][2]);
					assert.strictEqual(setIn.args[1][1], 'bar');
					assert.isNull(setIn.args[1][2]);
				});

				it('should push two instances of TransformDataError on to transformationErrors instance property if get throws with TransformDataError', () => {
					get.throws(new TransformDataError());
					document.transformRecordToDocument([]);
					assert.strictEqual(document.transformationErrors.length, 2);
					assert.instanceOf(document.transformationErrors[0], TransformDataError);
					assert.instanceOf(document.transformationErrors[1], TransformDataError);
				});

				it('should rethrow if any error other than TransformDataError is thrown', () => {
					get.throws(new Error());
					assert.throws(() => {
						document.transformRecordToDocument([]);
					});
				});
			});

			describe('non-stubbed tests', () => {
				// this set of tests is very intentionally not behaving like a "true" unit test as the function's external dependencies
				//   are not being stubbed.  This is because of a strong desire to test the input mv-type data structures to the
				//   anticipated outputs arising from applying the schema.  The external dependencies are either static helper functions
				//   internal to the Model class or lodash methods.  lodash methods can be considered javascript "language extensions",
				//   so stubbing their behavior is not crucial.  The static helper functions will be tested on their own in separate blocks
				//   to ensure satisfactory coverage of their individual behavior.
				describe('arrays of Schemas', () => {
					let schema;
					before(() => {
						schema = new Schema({
							propertyA: [
								new Schema({
									property1: { path: '1', type: String },
									property2: { path: '2', type: String },
								}),
							],
						});
					});

					it('should properly format well-formatted arrays of Schemas', () => {
						const record = [['foo', 'bar'], ['baz', 'qux']];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.containsAllKeys(document, 'propertyA');
						assert.isArray(document.propertyA);
						assert.deepInclude(document.propertyA[0], { property1: 'foo', property2: 'baz' });
						assert.deepInclude(document.propertyA[1], { property1: 'bar', property2: 'qux' });
					});

					it('should properly format arrays of Schemas not structured as arrays in data', () => {
						const record = ['foo', 'bar'];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.containsAllKeys(document, 'propertyA');
						assert.isArray(document.propertyA);
						assert.deepInclude(document.propertyA[0], { property1: 'foo', property2: 'bar' });
					});

					it('should properly format arrays of Schemas with ragged associations', () => {
						const record = [['foo', 'bar'], 'baz'];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.containsAllKeys(document, 'propertyA');
						assert.isArray(document.propertyA);
						assert.deepInclude(document.propertyA[0], { property1: 'foo', property2: 'baz' });
						assert.deepInclude(document.propertyA[1], { property1: 'bar', property2: null });
					});

					it('should properly format arrays of Schemas with sparse associations', () => {
						const record = [['foo', null, 'bar'], ['baz', null, 'qux']];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.containsAllKeys(document, 'propertyA');
						assert.isArray(document.propertyA);
						assert.deepInclude(document.propertyA[0], { property1: 'foo', property2: 'baz' });
						assert.deepInclude(document.propertyA[1], { property1: null, property2: null });
						assert.deepInclude(document.propertyA[2], { property1: 'bar', property2: 'qux' });
					});
				});

				describe('arrays of Schemas containing arrays of Schemas', () => {
					let schema;
					before(() => {
						schema = new Schema({
							propertyA: [
								new Schema({
									property1: { path: '1', type: String },
									propertyB: [{ property2: { path: '2', type: String } }],
								}),
							],
						});
					});

					it('should properly format nested sub-schemas', () => {
						const record = [['foo', 'bar'], [['baz', 'qux'], ['quux', 'corge']]];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.containsAllKeys(document, 'propertyA');
						assert.isArray(document.propertyA);
						assert.deepInclude(document.propertyA[0], { property1: 'foo' });
						assert.containsAllKeys(document.propertyA[0], 'propertyB');
						assert.isArray(document.propertyA[0].propertyB);
						assert.deepInclude(document.propertyA[0].propertyB[0], { property2: 'baz' });
						assert.deepInclude(document.propertyA[0].propertyB[1], { property2: 'qux' });

						assert.deepInclude(document.propertyA[1], { property1: 'bar' });
						assert.containsAllKeys(document.propertyA[1], 'propertyB');
						assert.isArray(document.propertyA[1].propertyB);
						assert.deepInclude(document.propertyA[1].propertyB[0], { property2: 'quux' });
						assert.deepInclude(document.propertyA[1].propertyB[1], { property2: 'corge' });
					});
				});

				describe('nested arrays of data definitions', () => {
					let schema;
					before(() => {
						schema = new Schema({ propertyA: [[{ path: '1', type: String }]] });
					});

					it('should properly format well-formatted nested arrays', () => {
						const record = [[['foo', 'bar'], ['baz', 'qux']]];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.deepInclude(document, {
							propertyA: [['foo', 'bar'], ['baz', 'qux']],
						});
					});

					it('should properly format nested arrays of length 1', () => {
						const record = [['foo', 'bar']];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.deepInclude(document, {
							propertyA: [['foo'], ['bar']],
						});
					});

					it('should properly format nested arrays that are not array-like in the data', () => {
						const record = ['foo'];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.deepInclude(document, {
							propertyA: [['foo']],
						});
					});

					it('should properly format nested arrays that are null values', () => {
						const record = [null];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.deepInclude(document, {
							propertyA: [],
						});
					});

					it('should properly format nested arrays that that have null values at indices other than 0', () => {
						const record = [[null, null]];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.deepInclude(document, {
							propertyA: [[null], [null]],
						});
					});
				});

				describe('arrays of data definitions', () => {
					let schema;
					before(() => {
						schema = new Schema({ propertyA: [{ path: '1', type: String }] });
					});

					it('should properly format well-formatted arrays', () => {
						const record = [['foo', 'bar']];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.deepInclude(document, {
							propertyA: ['foo', 'bar'],
						});
					});

					it('should properly format arrays that are not array-like in the data', () => {
						const record = ['foo'];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.deepInclude(document, {
							propertyA: ['foo'],
						});
					});

					it('should properly format arrays that are null values', () => {
						const record = [null];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.deepInclude(document, {
							propertyA: [],
						});
					});

					it('should properly format arrays that have null values at indices other than 0', () => {
						const record = [['foo', null]];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.deepInclude(document, {
							propertyA: ['foo', null],
						});
					});
				});

				describe('property value is schema', () => {
					let schema;
					before(() => {
						schema = new Schema({
							propertyA: new Schema({ property1: { path: '1', type: String } }),
						});
					});

					it('should properly format a property whose value is another schema', () => {
						const record = ['foo'];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.containsAllKeys(document, 'propertyA');
						assert.deepInclude(document.propertyA, { property1: 'foo' });
					});
				});

				describe('property value is data definition', () => {
					let schema;
					before(() => {
						schema = new Schema({ propertyA: { path: '1', type: String } });
					});

					it('should properly format a property whose value is a data definition', () => {
						const record = ['foo'];
						const document = new Document(schema);
						document.transformRecordToDocument(record);
						assert.deepInclude(document, {
							propertyA: 'foo',
						});
					});
				});
			});
		});
	});
});
