import type { INodeProperties } from 'n8n-workflow';
import { videoExtendVideoDescription } from './extendVideo';
import { videoUpscaleVideoDescription } from './upscaleVideo';
import { videoVideoDiffusionDescription } from './videoDiffusion';

const showOnlyForVideo = {
	resource: ['video'],
};

export const videoDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForVideo,
		},
		options: [
			{
				name: 'Extend Video',
				value: 'extendVideo',
				action: 'Extend video',
				description: 'Extend existing videos with seamless continuation and motion. Returns a new Job ID.',
				routing: {
					request: {
						method: 'POST',
						url: '/extend-video',
					},
				},
			},
			{
				name: 'Upscale Video',
				value: 'upscaleVideo',
				action: 'Upscale video',
				description: 'Enhance video resolution and quality using AI upscaling technology. Returns a new Job ID.',
				routing: {
					request: {
						method: 'POST',
						url: '/video-upscale',
					},
				},
			},
			{
				name: 'Video Diffusion',
				value: 'videoDiffusion',
				action: 'Video diffusion',
				description: 'Generate dynamic videos from text prompts or existing images. Returns a new Job ID.',
				routing: {
					request: {
						method: 'POST',
						url: '/video-diffusion',
					},
				},
			},
		],
		default: 'videoDiffusion',
	},
	...videoExtendVideoDescription,
	...videoUpscaleVideoDescription,
	...videoVideoDiffusionDescription,
];
