<template>
  <div class="carrousel">
    <div class="items" ref="items">
      <slot></slot>
    </div>
    <span class="control previus" @click.prevent.stop="scroll(-1)">
      <svg class="icon" width="17px" height="31px">
        <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"
        d="M0.271,15.614 L14.544,29.771 C14.880,30.105 15.419,30.105 15.755,29.771 C16.091,29.438 16.091,28.904 15.755,28.570 L2.091,15.017 L15.755,1.463 C16.091,1.129 16.091,0.595 15.755,0.261 C15.590,0.098 15.368,0.010 15.153,0.010 C14.937,0.010 14.715,0.091 14.550,0.261 L0.278,14.419 C-0.058,14.746 -0.058,15.287 0.271,15.614 Z"/>
      </svg>
    </span>
    <span class="control next" @click.prevent.stop="scroll(1)">
      <svg class="icon" width="17px" height="31px">
        <path fill-rule="evenodd"  fill="rgb(0, 0, 0)"
        d="M16.199,14.511 L2.038,0.354 C1.705,0.020 1.170,0.020 0.837,0.354 C0.503,0.687 0.503,1.221 0.837,1.555 L14.394,15.108 L0.837,28.662 C0.503,28.996 0.503,29.530 0.837,29.864 C1.000,30.027 1.221,30.115 1.435,30.115 C1.648,30.115 1.869,30.034 2.032,29.864 L16.193,15.706 C16.527,15.379 16.527,14.838 16.199,14.511 Z"/>
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  name: 'BaseCarrousel',
  methods: {
    scroll(direction) {
      this.$refs.items.scrollLeft += (152 * direction);
    },
  },
};
</script>

<style lang="scss">
.carrousel {
  position: relative;

  > .items {
    white-space: nowrap;
    touch-action: pan-y;
    overflow-x: hidden;
  }

  > .control {
    background-color: white;
    cursor: pointer;
    width: 3%;
    position: absolute;
    top: 0;
    bottom: 0;
    text-align: center;
    justify-content: center;
    display: flex;

    > .icon {
      height: auto;
      -webkit-align-self: center;
      -ms-flex-item-align: center;
      -ms-grid-row-align: center;
      align-self: center;
      font-size: 2.5vw;
    }
  }

  > .next {
    right: -3%;
  }

  > .previus {
    left: -3%;
  }
}
</style>


