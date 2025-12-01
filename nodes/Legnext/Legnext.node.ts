import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { imageDescription } from './resources/image';
import { jobDescription } from './resources/job';
import { accountDescription } from './resources/account';
import { videoDescription } from './resources/video';

export class Legnext implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Legnext',
		name: 'legnext',
		icon: { light: 'file:legnext.svg', dark: 'file:legnext.dark.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Legnext API',
		defaults: {
			name: 'Legnext',
		},
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'legnextApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.legnext.ai/api/v1',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Account',
						value: 'account',
					},
					{
						name: 'Image',
						value: 'image',
					},
					{
						name: 'Job',
						value: 'job',
					},
					{
						name: 'Video',
						value: 'video',
					},
				],
				default: 'image',
			},
			...accountDescription,
			...imageDescription,
			...jobDescription,
			...videoDescription,
		],
	};
}
