<div {...props} bind:this={contentRef} class={classes} data-placement={placement}>
  {#if children}
    {children}
  {:else}
    <slot />
  {/if}
</div>
<script>
  import classnames from 'classnames';
  import PopperJS from 'popper.js';
  import { onMount } from 'svelte';
  import { exclude } from './utils';

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
  let classes;
  let props;

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

  $: if ( ! targetRef) {
    throw new Error('A valid target reference must be passed to Popper component');
  }

  $: classes = classnames(className, 'svlt-popper');
  $: props = exclude($$props, [
      'placement',
      'eventsEnabled',
      'positionFixed',
      'modifiers',
      'children',
      'targetRef',
      'arrowRef',
      'borderColor',
      'backgroundColor'
    ]);
</script>
