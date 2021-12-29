import { create } from '@storybook/theming';
import packageJson from '../package.json';

export default create({
  base: 'light',
  textColor: 'hotpink',
  brandTitle: 'React CSS Spinners', // change title from storybook
  brandUrl: packageJson.repository.url // github page
});
