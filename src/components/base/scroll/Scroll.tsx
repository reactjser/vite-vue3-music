import { defineComponent, ref } from 'vue';
import useScroll from './use-scroll';

export default defineComponent({
  name: 'Scroll',
  props: {
    click: {
      type: Boolean,
      default: true,
    },
    probeType: {
      type: Number,
      default: 0,
    },
  },
  emits: ['scroll'],
  setup(props, { emit, slots }) {
    const rootRef = ref<HTMLElement | null>(null);
    useScroll(rootRef, props, emit);

    return () => <div ref={rootRef}>{slots.default?.()}</div>;
  },
});
