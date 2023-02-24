import { create } from '@storybook/theming';
import { addons } from '@storybook/addons';

const theme = create({
  base: 'dark',

  brandTitle: 'My custom storybook',
  brandUrl: 'https://radyadigital.com/en',
  brandImage: 'https://radyadigital.com/img/ic_brand_secondary.svg',
  brandTarget: '_self',
});

addons.setConfig({
  theme: theme,
});
