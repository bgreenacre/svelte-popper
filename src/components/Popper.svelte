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
  import { onDestroy, tick } from 'svelte';
  import exclude from './exclude.js';

  export let className = undefined;
  export let placement = 'bottom';
  export let eventsEnabled = true;
  export let positionFixed = false;
  export let modifiers = {};
  export let children = undefined;
  export let targetRef = undefined;
  export let arrowRef = undefined;
  export let outOfBoundaries = undefined;

  let classes;
  let contentRef;
  let popper = undefined;
  let props;
  let statePlacement = placement;

  const updateStateModifier = {
    enabled: true,
    order: 900,
    fn: (data) => {
      statePlacement = data.placement;
      outOfBoundaries = data.hide;

      return data;
    },
  };

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
      updateStateModifier,
    },
  });

  const destroyPopperInstance = () => {
    if ( ! popper) return;

    popper.destroy();
    popper = undefined;
  };

  const updatePopperInstance = async () => {
    await tick();

    destroyPopperInstance();

    popper = new PopperJS(targetRef, contentRef, getOptions());
  };

  export const scheduleUpdate = () => popper && popper.scheduleUpdate();

  onDestroy(() => destroyPopperInstance());

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
  $: arrowRef, targetRef, placement, positionFixed, modifiers, updatePopperInstance();
  $: if (popper) {
    if (eventsEnabled) {
      popper.enableEventListeners();
    }
    else {
      popper.disableEventListeners();
    }

    if (statePlacement) {
      scheduleUpdate();
    }
  }
</script>
