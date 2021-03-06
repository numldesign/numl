import combinedAttr from '../styles/combined';
import sizeAttr from '../styles/size';
import NuEl from './el';

export default class NuLine extends NuEl {
  static get nuTag() {
    return 'nu-line';
  }

  static get nuRole() {
    return 'separator';
  }

  static get nuBehaviors() {
    return {
      orient: true,
    };
  }

  static get nuGenerators() {
    return {
      orient(val) {
        const vertical = val === 'v';

        return combinedAttr({
          width: vertical ? '1fs 1fs' : 'min 1em',
          height: vertical ? 'min 1em' : '1fs 1fs',
        }, NuLine);
      },
      size(val) {
        return sizeAttr(val, {}, true);
      },
    };
  }

  static get nuStyles() {
    return {
      display: 'block',
      place: 'stretch',
      orient: 'h',
      size: '1bw',
      fill: 'var(--local-border-color, var(--border-color)) :special[special]',
      text: 'v-middle',
      box: 'y',
      transition: 'fill',
    };
  }

  static nuCSS({ tag, css }) {
    return [
      ...css,

      `${tag} {
        line-height: 0 !important;
      }`,
    ];
  }
}
