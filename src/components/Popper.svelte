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
  export let popper = undefined;

  let contentRef;
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
    popper = undefined;
  };

  const updatePopperInstance = () => {
    destroyPopperInstance();

    popper = new PopperJS(targetRef, contentRef, getOptions());
  };

  onMount(() => {
    updatePopperInstance();

    return () => destroyPopperInstance();
  });

  $: if (! targetRef) {
    throw new Error('A valid target reference must be passed to Popper component');
  }

  $: if (PopperJS.placements.indexOf(placement) === -1) {
    throw new Error(`Invalid placement sent: '${placement}' is not one of ${PopperJS.placements.join(', ')}.`);
  }

  $: props = exclude($$props, [
      'placement',
      'eventsEnabled',
      'positionFixed',
      'modifiers',
      'children',
      'targetRef',
      'arrowRef',
      'className',
      'popper',
    ]);

  $: classes = classnames(className, 'svlt-popper');
</script>
