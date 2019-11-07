<div bind:this={arrowRef}
  class={classes}
  data-placement={placement}
  style={stringifyStyles(arrowStyles)}
  />

<script>
  import classnames from 'classnames';
  import { stringifyStyles } from './utils';

  export let className = undefined;
  export let placement = 'bottom';
  export let arrowRef = undefined;
  export let borderColor = '#232323';
  export let backgroundColor = '#fff';
  export let style = undefined;

  let classes;
  let arrowStyles = {
    ...style,
    '--svlt-popper-arrow-border-color': borderColor,
    '--svlt-popper-arrow-background-color': backgroundColor,
  };

  if ([ 'top', 'bottom', 'left', 'right' ].indexOf(placement) === -1) {
    throw new Error(`Invalid value "${placement}" for placement. Should be one of "top", "bottom", "left" or "right".`);
  }

  $: classes = classnames(className, 'svlt-popper-arrow');
</script>
<style>
  .svlt-popper-arrow {
    position: absolute;
  }

  .svlt-popper-arrow:before,
  .svlt-popper-arrow:after {
    content: '';
    position: absolute;
    display: block;
    border-style: solid;
    border-color: transparent;
  }

  .svlt-popper-arrow[data-placement*='bottom'],
  .svlt-popper-arrow[data-placement*='top'] {
    margin: 0 0.3rem;
    height: 0.5rem;
    width: 1rem;
  }

  .svlt-popper-arrow[data-placement*='bottom'] {
    top: calc((0.5rem) * -1);
  }

  .svlt-popper-arrow[data-placement*='bottom']:before {
    top: 0;
    border-width: 0 0.5rem 0.5rem 0.5rem;
    border-bottom-color: var(--svlt-popper-arrow-border-color);
  }

  .svlt-popper-arrow[data-placement*='bottom']:after {
    top: 1px;
    border-width: 0 0.5rem 0.5rem 0.5rem;
    border-bottom-color: var(--svlt-popper-arrow-background-color);
  }

  .svlt-popper-arrow[data-placement*='top'] {
    bottom: calc((0.5rem) * -1);
  }

  .svlt-popper-arrow[data-placement*='top']:before {
    bottom: 0;
    border-width: 0.5rem 0.5rem 0;
    border-top-color: var(--svlt-popper-arrow-border-color);
  }

  .svlt-popper-arrow[data-placement*='top']:after {
    bottom: 1px;
    border-width: 0.5rem 0.5rem 0;
    border-top-color: var(--svlt-popper-arrow-background-color);
  }

  .svlt-popper-arrow[data-placement*='left'],
  .svlt-popper-arrow[data-placement*='right'] {
    margin: 0.3rem 0;
    height: 1rem;
    width: 0.5rem;
  }

  .svlt-popper-arrow[data-placement*='left'] {
    right: calc((0.5rem) * -1);
  }

  .svlt-popper-arrow[data-placement*='left']:before {
    right: 0;
    border-width: 0.5rem 0 0.5rem 0.5rem;
    border-left-color: var(--svlt-popper-arrow-border-color);
  }

  .svlt-popper-arrow[data-placement*='left']:after {
    right: 1px;
    border-width: 0.5rem 0 0.5rem 0.5rem;
    border-left-color: var(--svlt-popper-arrow-background-color);
  }

  .svlt-popper-arrow[data-placement*='right'] {
    left: calc((0.5rem) * -1);
  }

  .svlt-popper-arrow[data-placement*='right']:before {
    left: 0;
    border-width: 0.5rem 0.5rem 0.5rem 0;
    border-right-color: var(--svlt-popper-arrow-border-color);
  }

  .svlt-popper-arrow[data-placement*='right']:after {
    left: 1px;
    border-width: 0.5rem 0.5rem 0.5rem 0;
    border-right-color: var(--svlt-popper-arrow-background-color);
  }
</style>
