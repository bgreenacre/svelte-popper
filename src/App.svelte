<div>
  <button bind:this={targetRef} type="button" on:click={() => show = ! show}>Click Me</button>
  {#if show}<Popper {targetRef}>Hey it's me</Popper>{/if}
</div>
<script>
  import { Popper } from './components/components.module.js';

  let targetRef;
  let show = false;
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
