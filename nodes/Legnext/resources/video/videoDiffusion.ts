import type { INodeProperties } from 'n8n-workflow';

const showOnlyForVideoDiffusion = {
	operation: ['videoDiffusion'],
	resource: ['video'],
};

export const videoVideoDiffusionDescription: INodeProperties[] = [
	{
		displayName: 'Source Mode',
		name: 'sourceMode',
		type: 'options',
		default: 'fromJob',
		required: true,
		displayOptions: {
			show: showOnlyForVideoDiffusion,
		},
		options: [
			{
				name: 'From Job',
				value: 'fromJob',
				description: 'Use an existing generated image from a job',
			},
			{
				name: 'From Image URL',
				value: 'fromImageUrl',
				description: 'Use an image URL in the prompt',
			},
		],
		description: 'Choose how to specify the source image',
	},
	// Option 1: From Job fields
	{
		displayName: 'Job ID',
		name: 'jobId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForVideoDiffusion,
				sourceMode: ['fromJob'],
			},
		},
		description: 'ID of the source image generation task',
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
			show: {
				...showOnlyForVideoDiffusion,
				sourceMode: ['fromJob'],
			},
		},
		typeOptions: {
			minValue: 0,
			maxValue: 3,
		},
		description: 'Which image to animate (0-3, corresponding to the 4 generated images)',
		routing: {
			send: {
				type: 'body',
				property: 'imageNo',
			},
		},
	},
	{
		displayName: 'Prompt',
		name: 'promptFromJob',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				...showOnlyForVideoDiffusion,
				sourceMode: ['fromJob'],
			},
		},
		typeOptions: {
			rows: 4,
			maxLength: 8192,
		},
		description: 'Optional video generation prompt text (1-8192 characters)',
		routing: {
			send: {
				type: 'body',
				property: 'prompt',
			},
		},
	},
	// Option 2: From Image URL field
	{
		displayName: 'Prompt with Image URL',
		name: 'promptFromImageUrl',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				...showOnlyForVideoDiffusion,
				sourceMode: ['fromImageUrl'],
			},
		},
		typeOptions: {
			rows: 4,
			maxLength: 8192,
		},
		description: 'Video generation prompt with image URL included. Format: "[image_url] your prompt text" (1-8192 characters).',
		routing: {
			send: {
				type: 'body',
				property: 'prompt',
			},
		},
	},
	// Common fields
	{
		displayName: 'Video Type',
		name: 'videoType',
		type: 'options',
		default: 0,
		displayOptions: {
			show: showOnlyForVideoDiffusion,
		},
		options: [
			{
				name: '480p (Standard)',
				value: 0,
			},
			{
				name: '720p (HD)',
				value: 1,
			},
		],
		description: 'Video quality type',
		routing: {
			send: {
				type: 'body',
				property: 'videoType',
			},
		},
	},
	{
		displayName: 'Callback URL',
		name: 'callback',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForVideoDiffusion,
		},
		description: 'Optional webhook URL to receive the result when the video diffusion task is completed',
		routing: {
			send: {
				type: 'body',
				property: 'callback',
			},
		},
	},
];
