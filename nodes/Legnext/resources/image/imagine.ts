import type { INodeProperties } from 'n8n-workflow';

const showOnlyForImageImagine = {
	operation: ['imagine'],
	resource: ['image'],
};

export const imageImagineDescription: INodeProperties[] = [
	{
		displayName: 'Text Prompt',
		name: 'text',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForImageImagine,
		},
		description: 'The text prompt for image generation',
		routing: {
			send: {
				type: 'body',
				property: 'text',
			},
		},
	},
	{
		displayName: 'Callback URL',
		name: 'callback',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForImageImagine,
		},
		description: 'Optional webhook URL to receive the result when the task is completed',
		routing: {
			send: {
				type: 'body',
				property: 'callback',
			},
		},
	},
];
