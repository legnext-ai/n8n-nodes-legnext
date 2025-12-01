import type { INodeProperties } from 'n8n-workflow';
import { imageImagineDescription } from './imagine';
import { imageUpscaleDescription } from './upscale';
import { imageVariationDescription } from './variation';
import { imageRerollDescription } from './reroll';
import { imagePanDescription } from './pan';
import { imageOutpaintDescription } from './outpaint';
import { imageBlendDescription } from './blend';
import { imageDescribeDescription } from './describe';
import { imageShortenDescription } from './shorten';

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
			{
				name: 'Variation',
				value: 'variation',
				action: 'Variation',
				description: 'Create variations of a selected image, optionally with a remix prompt. Returns a new Job ID.',
				routing: {
					request: {
						method: 'POST',
						url: '/variation',
					},
				},
			},
			{
				name: 'Reroll',
				value: 'reroll',
				action: 'Reroll',
				description: 'Regenerate images using the same prompt from a previous job. Returns a new Job ID.',
				routing: {
					request: {
						method: 'POST',
						url: '/reroll',
					},
				},
			},
			{
				name: 'Pan',
				value: 'pan',
				action: 'Pan / Extend Canvas',
				description: 'Extend the image canvas in a specified direction with a scale ratio. Returns a new Job ID.',
				routing: {
					request: {
						method: 'POST',
						url: '/pan',
					},
				},
			},
			{
				name: 'Outpaint',
				value: 'outpaint',
				action: 'Outpaint',
				description: 'Generate an image in a specified direction with a scale ratio. Returns a new Job ID.',
				routing: {
					request: {
						method: 'POST',
						url: '/outpaint',
					},
				},
			},
			{
				name: 'Blend',
				value: 'blend',
				action: 'Blend',
				description: 'Blend 2-5 images together. Returns a new Job ID.',
				routing: {
					request: {
						method: 'POST',
						url: '/blend',
					},
				},
			},
			{
				name: 'Describe',
				value: 'describe',
				action: 'Describe',
				description: 'Generate text descriptions and prompts from an image. Returns a new Job ID.',
				routing: {
					request: {
						method: 'POST',
						url: '/describe',
					},
				},
			},
			{
				name: 'Shorten',
				value: 'shorten',
				action: 'Shorten',
				description: 'Analyze and shorten a prompt to its key elements. Returns a new Job ID.',
				routing: {
					request: {
						method: 'POST',
						url: '/shorten',
					},
				},
			},
		],
		default: 'imagine',
	},
	...imageImagineDescription,
	...imageUpscaleDescription,
	...imageVariationDescription,
	...imageRerollDescription,
	...imagePanDescription,
	...imageOutpaintDescription,
	...imageBlendDescription,
	...imageDescribeDescription,
	...imageShortenDescription,
];
