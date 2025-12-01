import type { INodeProperties } from 'n8n-workflow';
import { imageImagineDescription } from './imagine';
import { imageUpscaleDescription } from './upscale';

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
				action: 'Imagine',
				description: 'Generates a 2x2 image grid from a prompt. Returns the Job ID.',
				routing: {
					request: {
						method: 'POST',
						url: '/diffusion',
					},
				},
			},
			{
				name: 'Upscale',
				value: 'upscale',
				action: 'Upscale',
				description: 'Upscale one of the grid images from a previous job. Returns a new Job ID.',
				routing: {
					request: {
						method: 'POST',
						url: '/upscale',
					},
				},
			},
		],
		default: 'imagine',
	},
	...imageImagineDescription,
	...imageUpscaleDescription,
];
