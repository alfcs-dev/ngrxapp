import { Activity } from './activity.model';

export interface Program {
  name: string;
  id?: number;
  organization?: string;
  country?: string;
  start_date?: string;
  end_date?: string;
  activities?: Activity[];
}
