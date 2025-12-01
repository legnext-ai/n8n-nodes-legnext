import type { INodeProperties } from 'n8n-workflow';

const showOnlyForImageUpscale = {
	operation: ['upscale'],
	resource: ['image'],
};

export const imageUpscaleDescription: INodeProperties[] = [
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForImageUpscale,
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
			show: showOnlyForImageUpscale,
		},
		typeOptions: {
			minValue: 0,
			maxValue: 3,
		},
		description: 'Which image to upscale (0-3, corresponding to the 4 generated images)',
		routing: {
			send: {
				type: 'body',
				property: 'imageNo',
			},
		},
	},
	{
		displayName: 'Upscale Type',
		name: 'type',
		type: 'options',
		default: 0,
		required: true,
		displayOptions: {
			show: showOnlyForImageUpscale,
		},
		options: [
			{
				name: 'Subtle',
				value: 0,
			},
			{
				name: 'Creative',
				value: 1,
			},
			{
				name: '2x',
				value: 2,
			},
			{
				name: '4x',
				value: 3,
			},
		],
		description: 'The type of upscaling to apply',
		routing: {
			send: {
				type: 'body',
				property: 'type',
			},
		},
	},
	{
		displayName: 'Callback URL',
		name: 'callback',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForImageUpscale,
		},
		description: 'Optional webhook URL to receive the result when the upscale task is completed',
		routing: {
			send: {
				type: 'body',
				property: 'callback',
			},
		},
	},
];
