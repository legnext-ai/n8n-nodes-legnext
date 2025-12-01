import type { INodeProperties } from 'n8n-workflow';

const showOnlyForImagePan = {
	operation: ['pan'],
	resource: ['image'],
};

export const imagePanDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForImagePan,
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
			show: showOnlyForImagePan,
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
		displayName: 'Direction',
		name: 'direction',
		type: 'options',
		default: 1,
		required: true,
		displayOptions: {
			show: showOnlyForImagePan,
		},
		options: [
			{
				name: 'Down',
				value: 0,
			},
			{
				name: 'Right',
				value: 1,
			},
			{
				name: 'Up',
				value: 2,
			},
			{
				name: 'Left',
				value: 3,
			},
		],
		description: 'The direction to extend the image canvas',
		routing: {
			send: {
				type: 'body',
				property: 'direction',
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
			show: showOnlyForImagePan,
		},
		typeOptions: {
			minValue: 1.1,
			maxValue: 3.0,
			numberPrecision: 2,
		},
		description: 'Extension scale ratio (1.1-3.0). Example: 1.13 means extending 13% in the specified direction.',
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
			show: showOnlyForImagePan,
		},
		typeOptions: {
			maxLength: 8192,
		},
		description: 'Optional text prompt for the extended area (1-8192 characters)',
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
			show: showOnlyForImagePan,
		},
		description: 'Optional webhook URL to receive the result when the pan task is completed',
		routing: {
			send: {
				type: 'body',
				property: 'callback',
			},
		},
	},
];
