import type { INodeProperties } from 'n8n-workflow';

const showOnlyForImageDescribe = {
	operation: ['describe'],
	resource: ['image'],
};

export const imageDescribeDescription: INodeProperties[] = [
	{
		displayName: 'Image URL',
		name: 'imgUrl',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForImageDescribe,
		},
		description: 'URL link to the image to describe',
		routing: {
			send: {
				type: 'body',
				property: 'imgUrl',
			},
		},
	},
	{
		displayName: 'Callback URL',
		name: 'callback',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForImageDescribe,
		},
		description: 'Optional webhook URL to receive the result when the describe task is completed',
		routing: {
			send: {
				type: 'body',
				property: 'callback',
			},
		},
	},
];
