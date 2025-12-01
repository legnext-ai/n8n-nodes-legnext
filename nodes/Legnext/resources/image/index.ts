import type { INodeProperties } from 'n8n-workflow';
import { imageImagineDescription } from './imagine';

const showOnlyForImage = {
	resource: ['image'],
};

export const imageDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForImage,
		},
		options: [
			{
				name: 'Imagine',
				value: 'imagine',
				action: 'Create image grid',
				description: 'Generates a 2x2 image grid from a prompt. Returns the Job ID.',
				routing: {
					request: {
						method: 'POST',
						url: '/diffusion',
					},
				},
			},
		],
		default: 'imagine',
	},
	...imageImagineDescription,
];
