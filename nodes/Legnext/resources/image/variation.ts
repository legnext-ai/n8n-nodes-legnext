import type { INodeProperties } from 'n8n-workflow';

const showOnlyForImageVariation = {
	operation: ['variation'],
	resource: ['image'],
};

export const imageVariationDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForImageVariation,
		},
		description: 'The job ID from a previous image generation task',
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
			show: showOnlyForImageVariation,
		},
		typeOptions: {
			minValue: 0,
			maxValue: 3,
		},
		description: 'Which image to create variations from (0-3, corresponding to the 4 generated images)',
		routing: {
			send: {
				type: 'body',
				property: 'imageNo',
			},
		},
	},
	{
		displayName: 'Variation Type',
		name: 'type',
		type: 'options',
		default: 0,
		required: true,
		displayOptions: {
			show: showOnlyForImageVariation,
		},
		options: [
			{
				name: 'Subtle',
				value: 0,
			},
			{
				name: 'Strong',
				value: 1,
			},
		],
		description: 'The type of variation to create',
		routing: {
			send: {
				type: 'body',
				property: 'type',
			},
		},
	},
	{
		displayName: 'Remix Prompt',
		name: 'remixPrompt',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForImageVariation,
		},
		description: 'Optional prompt to remix the image with new elements (e.g., "A beautiful sunset over the snow mountains")',
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
			show: showOnlyForImageVariation,
		},
		description: 'Optional webhook URL to receive the result when the variation task is completed',
		routing: {
			send: {
				type: 'body',
				property: 'callback',
			},
		},
	},
];
