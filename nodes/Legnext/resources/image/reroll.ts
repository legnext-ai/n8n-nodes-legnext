import type { INodeProperties } from 'n8n-workflow';

const showOnlyForImageReroll = {
	operation: ['reroll'],
	resource: ['image'],
};

export const imageRerollDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForImageReroll,
		},
		description: 'The ID of the original task to reroll (regenerate with the same prompt)',
		routing: {
			send: {
				type: 'body',
				property: 'jobId',
			},
		},
	},
	{
		displayName: 'Callback URL',
		name: 'callback',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForImageReroll,
		},
		description: 'Optional webhook URL to receive the result when the reroll task is completed',
		routing: {
			send: {
				type: 'body',
				property: 'callback',
			},
		},
	},
];
