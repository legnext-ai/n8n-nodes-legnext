import type { IDataObject, INodeProperties } from 'n8n-workflow';

const showOnlyForImageBlend = {
	operation: ['blend'],
	resource: ['image'],
};

export const imageBlendDescription: INodeProperties[] = [
	{
		displayName: 'Image URLs',
		name: 'imgUrls',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForImageBlend,
		},
		typeOptions: {
			rows: 4,
		},
		description: 'Array of 2-5 image URLs to blend (one per line)',
		routing: {
			send: {
				type: 'body',
				property: 'imgUrls',
				preSend: [
					async function (this, requestOptions) {
						const imgUrls = this.getNodeParameter('imgUrls') as string;
						const urlArray = imgUrls
							.split('\n')
							.map((url) => url.trim())
							.filter((url) => url.length > 0);

						if (urlArray.length < 2 || urlArray.length > 5) {
							throw new Error('Please provide between 2 and 5 image URLs');
						}

						requestOptions.body = requestOptions.body || {};
						(requestOptions.body as IDataObject).imgUrls = urlArray;
						return requestOptions;
					},
				],
			},
		},
	},
	{
		displayName: 'Aspect Ratio',
		name: 'aspect_ratio',
		type: 'options',
		default: '1:1',
		required: true,
		displayOptions: {
			show: showOnlyForImageBlend,
		},
		options: [
			{
				name: '2:3',
				value: '2:3',
			},
			{
				name: '1:1',
				value: '1:1',
			},
			{
				name: '3:2',
				value: '3:2',
			},
		],
		description: 'Aspect ratio for the blended image',
		routing: {
			send: {
				type: 'body',
				property: 'aspect_ratio',
			},
		},
	},
	{
		displayName: 'Callback URL',
		name: 'callback',
		type: 'string',
		default: '',
		displayOptions: {
			show: showOnlyForImageBlend,
		},
		description: 'Optional webhook URL to receive the result when the blend task is completed',
		routing: {
			send: {
				type: 'body',
				property: 'callback',
			},
		},
	},
];
