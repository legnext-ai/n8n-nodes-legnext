import type { INodeProperties } from 'n8n-workflow';
import { accountGetBalanceDescription } from './getBalance';

const showOnlyForAccount = {
	resource: ['account'],
};

export const accountDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: showOnlyForAccount,
		},
		options: [
			{
				name: 'Get Balance',
				value: 'getBalance',
				action: 'Get account balance',
				description: 'Retrieve account balance information including credits and points',
				routing: {
					request: {
						method: 'GET',
						url: '../account/balance',
					},
				},
			},
		],
		default: 'getBalance',
	},
	...accountGetBalanceDescription,
];
