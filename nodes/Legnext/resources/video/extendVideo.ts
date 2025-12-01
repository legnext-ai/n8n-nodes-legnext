import type { INodeProperties } from 'n8n-workflow';

const showOnlyForVideoExtend = {
	operation: ['extendVideo'],
	resource: ['video'],
};

export const videoExtendVideoDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForVideoExtend,
		},
		description: 'ID of the original video generation task',
		routing: {
			send: {
				type: 'body',
				property: 'jobId',
			},
		},
	},
	{
		displayName: 'Video Number',
		name: 'videoNo',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: showOnlyForVideoExtend,
		},
		typeOptions: {
			minValue: 0,
			maxValue: 3,
		},
		description: 'Which video to extend (0-3, corresponding to the 4 generated videos)',
		routing: {
			send: {
				type: 'body',
				property: 'videoNo',
			},
		},
	},
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForVideoExtend,
		},
		typeOptions: {
			rows: 4,
			maxLength: 8192,
		},
		description: 'Optional text prompt to guide the extension (1-8192 characters)',
		routing: {
			send: {
				type: 'body',
				property: 'prompt',
			},
		},
	},
	{
		displayName: 'Callback URL',
		name: 'callback',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForVideoExtend,
		},
		description: 'Optional webhook URL to receive the result when the extend video task is completed',
		routing: {
			send: {
				type: 'body',
				property: 'callback',
			},
		},
	},
];
