import type { INodeProperties } from 'n8n-workflow';

const showOnlyForAccountGetBalance = {
	operation: ['getBalance'],
	resource: ['account'],
};

export const accountGetBalanceDescription: INodeProperties[] = [
	{
		displayName: 'Note',
		name: 'note',
		type: 'notice',
		default: '',
		displayOptions: {
			show: showOnlyForAccountGetBalance,
		},
		description: 'Retrieves your account balance information including USD balance, available credits, and points',
	},
];
