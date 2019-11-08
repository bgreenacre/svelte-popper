<div bind:this={contentRef}
  class={classes}
  data-placement={placement}
  {...exclude($$props, [
    'placement',
    'eventsEnabled',
    'positionFixed',
    'modifiers',
    'children',
    'targetRef',
    'arrowRef',
    'borderColor',
    'backgroundColor'
  ])}
  >
  {#if children}
    {children}
  {:else}
    <slot />
  {/if}
  <slot name="arrow"><Arrow bind:arrowRef {placement} bind:borderColor bind:backgroundColor /></slot>
</div>

<script>
  import classnames from 'classnames';
  import PopperJS from 'popper.js';
  import { onMount } from 'svelte';
  import { exclude } from './utils';
  import Arrow from './Arrow.svelte';

  export let className = undefined;
  export let placement = 'bottom';
  export let eventsEnabled = true;
  export let positionFixed = false;
  export let modifiers = {};
  export let children = undefined;
  export let targetRef = undefined;
  export let arrowRef = undefined;
  export let borderColor = undefined;
  export let backgroundColor = undefined;

  let contentRef;
  let popper;

  const getOptions = () => ({
    placement,
    eventsEnabled,
    positionFixed,
    modifiers: {
      ...modifiers,
      arrow: {
        ...(modifiers && modifiers.arrow),
        enabled: !! arrowRef,
        element: arrowRef,
      },
    },
  });

  const destroyPopperInstance = () => {
    if ( ! popper) return;

    popper.destroy();
    popper = null;
  };

  const updatePopperInstance = () => {
    destroyPopperInstance();

    popper = new PopperJS(targetRef, contentRef, getOptions());
  };

  onMount(() => {
    updatePopperInstance();

    return () => destroyPopperInstance();
  });

  $: classes = classnames(className, 'svlt-popper');
</script>
<style>
  .svlt-popper {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    background-color: white;
    background-clip: padding-box;
  }

  .svlt-popper[data-placement*='bottom'] {
    margin-top: 0.5rem;
  }

  .svlt-popper[data-placement*='top'] {
    margin-bottom: 0.5rem;
  }

  .svlt-popper[data-placement*='right'] {
    margin-left: 0.5rem;
  }

  .svlt-popper[data-placement*='left'] {
    margin-right: 0.5rem;
  }
</style>
