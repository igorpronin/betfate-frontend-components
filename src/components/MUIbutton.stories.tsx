import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import {Story, Meta} from '@storybook/react/types-6-0';

import {MUIButton, MUIButtonProps} from './MUIButton';

export default {
  title: 'Example/MUIButton',
  component: MUIButton
} as Meta;

const Template: Story<MUIButtonProps> = (args) => <MUIButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};
