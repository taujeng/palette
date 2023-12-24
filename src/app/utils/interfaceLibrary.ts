import { IconLookup } from '@fortawesome/fontawesome-svg-core'
export interface MyEntryObject {
  id: string;
  name: string;
  category: string;
  selected: boolean;
  reaction: string;
  icon: IconLookup;
}