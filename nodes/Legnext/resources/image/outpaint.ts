import type { INodeProperties } from 'n8n-workflow';

const showOnlyForImageOutpaint = {
	operation: ['outpaint'],
	resource: ['image'],
};

export const imageOutpaintDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForImageOutpaint,
		},
		description: 'The ID of the original image generation task',
		routing: {
			send: {
				type: 'body',
				property: 'jobId',
			},
		},
	},
	{
		displayName: 'Image Number',
		name: 'imageNo',
		type: 'number',
		default: 0,
		required: true,
		displayOptions: {
			show: showOnlyForImageOutpaint,
		},
		typeOptions: {
			minValue: 0,
			maxValue: 3,
		},
		description: 'Which image to extend (0-3, corresponding to the 4 generated images)',
		routing: {
			send: {
				type: 'body',
				property: 'imageNo',
			},
		},
	},
	{
		displayName: 'Scale',
		name: 'scale',
		type: 'number',
		default: 1.5,
		required: true,
		displayOptions: {
			show: showOnlyForImageOutpaint,
		},
		typeOptions: {
			minValue: 1.1,
			maxValue: 2.0,
			numberPrecision: 2,
		},
		description: 'Extension scale ratio (1.1-2.0). Example: 1.2 means 20% extension in all directions (original occupies 83% of new image).',
		routing: {
			send: {
				type: 'body',
				property: 'scale',
			},
		},
	},
	{
		displayName: 'Remix Prompt',
		name: 'remixPrompt',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForImageOutpaint,
		},
		typeOptions: {
			maxLength: 8192,
		},
		description: 'Optional text prompt for the extended areas (1-8192 characters)',
		routing: {
			send: {
				type: 'body',
				property: 'remixPrompt',
			},
		},
	},
	{
		displayName: 'Callback URL',
		name: 'callback',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForImageOutpaint,
		},
		description: 'Optional webhook URL to receive the result when the outpaint task is completed',
		routing: {
			send: {
				type: 'body',
				property: 'callback',
			},
		},
	},
];
