import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Accordion from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Accordion/Accordion',
  component: Accordion,

} as ComponentMeta<typeof Accordion>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: ComponentStory<typeof Accordion> = () => <Accordion key="section-one" title="Section 1">Conteudo escondido</Accordion>;

export const LargeContent: ComponentStory<typeof Accordion> = () => (
  <>
    <Accordion key="section-two" title="Section 2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Alias eius dicta delectus enim laboriosam unde tempore aliquid similique eos, 
      illo dolore beatae magnam, iusto aliquam maiores! Magnam corrupti delectus eaque!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Alias eius dicta delectus enim laboriosam unde tempore aliquid similique eos, 
      illo dolore beatae magnam, iusto aliquam maiores! Magnam corrupti delectus eaque!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Alias eius dicta delectus enim laboriosam unde tempore aliquid similique eos, 
      illo dolore beatae magnam, iusto aliquam maiores! Magnam corrupti delectus eaque!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Alias eius dicta delectus enim laboriosam unde tempore aliquid similique eos, 
      illo dolore beatae magnam, iusto aliquam maiores! Magnam corrupti delectus eaque!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Alias eius dicta delectus enim laboriosam unde tempore aliquid similique eos, 
      illo dolore beatae magnam, iusto aliquam maiores! Magnam corrupti delectus eaque!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Alias eius dicta delectus enim laboriosam unde tempore aliquid similique eos, 
      illo dolore beatae magnam, iusto aliquam maiores! Magnam corrupti delectus eaque!
    </Accordion>

    <p>From dust</p>
  </>
);
