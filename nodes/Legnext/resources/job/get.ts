import type { INodeProperties } from 'n8n-workflow';

const showOnlyForJobGet = {
	operation: ['get'],
	resource: ['job'],
};

export const jobGetDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForJobGet,
		},
		description: 'The ID of the job to fetch (e.g., "330fcc57-201b-4b16-aa4e-09402ad07c6d")',
	},
];
