import { ActionType } from '../enums/actionType';

export const actionLabels: Record<ActionType, string> = {
  [ActionType.COPY]: 'Copy Results',
  [ActionType.CLEAR]: 'Clear Results',
  [ActionType.GENERATE]: 'GENERATE',
};
