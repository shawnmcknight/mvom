import ConnectionManagerError from './ConnectionManager';
import DataValidationError from './DataValidation';
import DbServerError from './DbServer';
import DisallowDirectError from './DisallowDirect';
import InvalidParameterError from './InvalidParameter';
import InvalidServerFeaturesError from './InvalidServerFeatures';
import NotImplementedError from './NotImplemented';
import TransformDataError from './TransformData';

/**
 * @typedef {Object} Errors
 * @property {Error} ConnectionManager
 * @property {Error} DataValidation
 * @property {Error} DbServer
 * @property {Error} DisallowDirect
 * @property {Error} InvalidParameter
 * @property {Error} InvalidServerFeatures
 * @property {Error} NotImplemented
 * @property {Error} TransformData
 */
export default {
	ConnectionManager: ConnectionManagerError,
	DataValidation: DataValidationError,
	DbServer: DbServerError,
	DisallowDirect: DisallowDirectError,
	InvalidParameter: InvalidParameterError,
	InvalidServerFeatures: InvalidServerFeaturesError,
	NotImplemented: NotImplementedError,
	TransformData: TransformDataError,
};
