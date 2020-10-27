import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Logo from '../Logo.vue';


console.log('withKnobs:', withKnobs);
storiesOf('test1/Logo', module)
  .addDecorator(withKnobs)
  .add('Logo Component', () => ({
    components: { Logo },
    template: `
    <div>
      ${boolean(false, true, false)}
      <logo />
    </div>
    `,
  }))
  .add('Logo Component2', () => ({
    components: { Logo },
    template: '<logo name="blabla"/>',
  }))
  .add('Logo Component3', () => ({
    components: { Logo },
    template: '<logo name="You" />',
  }))
