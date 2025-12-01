import type { INodeProperties } from 'n8n-workflow';
import { jobGetDescription } from './get';

const showOnlyForJob = {
	resource: ['job'],
};

export const jobDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForJob,
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				action: 'Get job status',
				description: 'Fetch the status and result of a job by its ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/job/{{$parameter.jobId}}',
					},
				},
			},
		],
		default: 'get',
	},
	...jobGetDescription,
];
