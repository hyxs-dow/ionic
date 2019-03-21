import { Component, ComponentInterface, Prop } from '@stencil/core';

import { Mode } from '../../interface';

@Component({
  tag: 'ion-avatar',
  styleUrls: {
    ios: 'avatar.ios.scss',
    md: 'avatar.md.scss'
  },
  shadow: true
})
export class Avatar implements ComponentInterface {

  /**
   * The mode determines which platform styles to use.
   */
  @Prop() mode!: Mode;

  hostData() {
    return {
      class: {
        [`avatar`]: true,
        [`avatar-${this.mode}`]: true,
      }
    };
  }

  render() {
    return <slot></slot>;
  }

}
