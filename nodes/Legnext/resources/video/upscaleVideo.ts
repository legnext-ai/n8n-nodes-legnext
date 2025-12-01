import type { INodeProperties } from 'n8n-workflow';

const showOnlyForVideoUpscale = {
	operation: ['upscaleVideo'],
	resource: ['video'],
};

export const videoUpscaleVideoDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForVideoUpscale,
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
			show: showOnlyForVideoUpscale,
		},
		typeOptions: {
			minValue: 0,
			maxValue: 3,
		},
		description: 'Which video to upscale (0-3, corresponding to the 4 generated videos)',
		routing: {
			send: {
				type: 'body',
				property: 'videoNo',
			},
		},
	},
	{
		displayName: 'Callback URL',
		name: 'callback',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForVideoUpscale,
		},
		description: 'Optional webhook URL to receive the result when the upscale video task is completed',
		routing: {
			send: {
				type: 'body',
				property: 'callback',
			},
		},
	},
];
