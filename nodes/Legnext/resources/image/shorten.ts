import type { INodeProperties } from 'n8n-workflow';

const showOnlyForImageShorten = {
	operation: ['shorten'],
	resource: ['image'],
};

export const imageShortenDescription: INodeProperties[] = [
	{
		displayName: 'Prompt',
		name: 'prompt',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForImageShorten,
		},
		typeOptions: {
			rows: 4,
			maxLength: 8192,
		},
		description: 'The prompt to analyze and shorten (1-8192 characters)',
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
			show: showOnlyForImageShorten,
		},
		description: 'Optional webhook URL to receive the result when the shorten task is completed',
		routing: {
			send: {
				type: 'body',
				property: 'callback',
			},
		},
	},
];
