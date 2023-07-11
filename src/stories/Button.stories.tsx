import type { Meta, StoryObj } from "@storybook/react";

import { Button, ButtonWithHooks } from "./Button";
import React from "react";

/**@todo Global args */
/**@todo Mapping to complex arg values */

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/Atom/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    label: {
      options: ["Normal", "Bold", "Italic"],
      mapping: {
        Bold: <b>Bold</b>,
        Italic: <i style={{ color: "red" }}>이탤릭!</i>,
      },
      if: { arg: "primary", truthy: false },
    },
    /**@description actions: { argTypesRegex: '^[A-Z].*' }이 설정되지 않은 경우 action으로 개별 설정 */
    onClick: { action: "clicked!" },
    primary: {
      // table: {
      //   disable: true,
      // },

      options: [true, false],
      // if: { arg: 'label', eq: 'zz' },
      // if: { arg: 'label', exists: true },
      // control: { type: 'color' },
      // control: false,
      // control: {
      //   type: 'radio',
      //   labels: {
      //     // 'labels' maps option values to string labels
      //     true: 'Up',
      //     false: 'Down',
      //   },
      // },
      // control: { type: 'file', accept: '.png' },

      // control: { type: 'select' },
    },
  },
  // args: {
  //   primary: true,
  // },
  parameters: {
    controls: { sort: "requiredFirst" },
    actions: {
      /**@see decorators */
      handles: ["mouseenter"],
    },
    backgrounds: {
      default: "twitter",
      values: [
        { name: "twitter", value: "#00aced" },
        { name: "facebook", value: "#3b5998" },
      ],
      /**@description Canvas toolbar grid */
      grid: {
        // disable: true,
        // cellSize: 20,
        // opacity: 0.5,
        // cellAmount: 5,
        // offsetX: 16, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
        // offsetY: 116, // Default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      },
    },
  },
  decorators: [
    (Story, { parameters }) => (
      <div style={{ margin: "3em" }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: "Hello",
    primary: true,
  },
  // name: 'I am the primary',
  render: () => <Button label="hu5" />,
};

export const Secondary: Story = {
  args: {
    ...Primary.args,
    label: "Secondary",
  },
  render: ({ label, ...props }) => <Button label={label} {...props} />,
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
  /**@description Decorators at each story */
  decorators: [
    (Story) => (
      <div style={{ background: "red" }}>
        <Story />
      </div>
    ),
  ],
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
    title: "hihi",
    // onClick: () => {
    //   console.log('hi');
    // },
  },
  loaders: [
    async () => ({
      todo: await (
        await fetch("https://jsonplaceholder.typicode.com/todos/1")
      ).json(),
    }),
  ],
  parameters: {
    // controls: { include: ['primary', 'bar'] },
  },
  /**@see spread 순서 주의 */
  render: (args, { loaded: { todo } }) => <Button {...args} {...todo} />,
};
