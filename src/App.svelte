<main class="container" role="main">
  <div class="row">
    <div class="col-sm">
      <button bind:this={targetRef} type="button" class="btn btn-lg btn-info" on:click={() => show = ! show}>Click Me</button>
      {#if show}
        <Popper {targetRef} {arrowRef} className="popover show bs-popover-bottom">
          <div class="popover-inner"><div class="popover-body">Hey it's me</div></div>
          <span bind:this={arrowRef} class="arrow" />
        </Popper>
      {/if}
    </div>
  </div>
</main>
<script>
  import { Popper } from './components/components.module.js';

  let targetRef;
  let arrowRef;
  let show = false;
</script>
<style>
  .row {
    padding: 3em;
  }
</style>
