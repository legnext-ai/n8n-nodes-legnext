import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class LegnextApi implements ICredentialType {
	name = 'legnextApi';

	displayName = 'Legnext API';

	// Link to your community node's README
	documentationUrl = 'https://github.com/org/-legnext?tab=readme-ov-file#credentials';

	icon = {
		light: 'file:legnext.svg',
		dark: 'file:legnext.dark.svg',
	} as const;

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			required: true,
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-api-key': '={{$credentials.apiKey}}',
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.legnext.ai',
			url: '/api/v1/job/test',
		},
	};
}
