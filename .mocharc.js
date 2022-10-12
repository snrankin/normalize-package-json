module.exports = {
	require: ['ts-node/register'],
	'watch-files': ['./src/**/*.ts'],
	loader: 'ts-node/esm',
	extensions: ['ts', 'tsx'],
	spec: ['tests/**/*.spec.*'],
};
