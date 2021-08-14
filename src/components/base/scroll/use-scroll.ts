import BScroll from '@better-scroll/core';
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll';
import ObserveDOM from '@better-scroll/observe-dom';
import {
  onMounted,
  onUnmounted,
  onActivated,
  onDeactivated,
  ref,
  Ref,
} from 'vue';

interface IPos {
  x: number;
  y: number;
}

BScroll.use(ObserveDOM);

export default function useScroll(
  wrapperRef: Ref<HTMLElement | null>,
  options: {
    click: boolean;
    probeType: number;
  },
  emit: (event: 'scroll', arg: IPos) => void,
) {
  const scroll = ref<BScrollConstructor | null>(null);

  onMounted(() => {
    if (!wrapperRef.value) {
      throw new Error('wrapperRef.value is null');
    }
    const scrollVal = (scroll.value = new BScroll(wrapperRef.value, {
      observeDOM: true,
      ...options,
    }));

    if (options.probeType > 0) {
      scrollVal.on('scroll', (pos: IPos) => {
        emit('scroll', pos);
      });
    }
  });

  onUnmounted(() => {
    scroll.value?.destroy();
  });

  onActivated(() => {
    scroll.value?.enable();
    scroll.value?.refresh();
  });

  onDeactivated(() => {
    scroll.value?.disable();
  });

  return scroll;
}
