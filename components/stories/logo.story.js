import { storiesOf } from '@storybook/vue';

import Logo from '../Logo.vue';


storiesOf('Logo', module)
  .add('Logo Component', () => ({
    components: { Logo },
    template: '<logo />',
  }))
  // .add('desabled', () => ({
  //   components: { Logo },
  //   template: `<Logo @emitClick="emitClick"/>`,
  //   methods: {
  //     emitClick() {
  //       console.log('스토리2다!');
  //     }
  //   },
  // }))