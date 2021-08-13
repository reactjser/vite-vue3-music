import {
  onMounted,
  onUnmounted,
  onActivated,
  onDeactivated,
  ref,
  Ref,
} from 'vue';
import BScroll from '@better-scroll/core';
import Slide from '@better-scroll/slide';
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll';

interface IPage {
  x: number;
  y: number;
  pageX: number;
  pageY: number;
}

BScroll.use(Slide);

export default function useSlider(wrapperRef: Ref<HTMLElement | null>) {
  const slider = ref<BScrollConstructor | null>(null);
  const currentPageIndex = ref(0);

  onMounted(() => {
    if (!wrapperRef.value) {
      throw new Error('wrapperRef.value is null');
    }
    const sliderVal = (slider.value = new BScroll(wrapperRef.value, {
      click: true,
      scrollX: true,
      scrollY: false,
      momentum: false,
      bounce: false,
      probeType: 2,
      slide: true,
    }));

    sliderVal.on('slideWillChange', (page: IPage) => {
      currentPageIndex.value = page.pageX;
    });
  });

  onUnmounted(() => {
    slider.value?.destroy();
  });

  onActivated(() => {
    slider.value?.enable();
    slider.value?.refresh();
  });

  onDeactivated(() => {
    slider.value?.disable();
  });

  return {
    slider,
    currentPageIndex,
  };
}
