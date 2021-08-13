import { defineComponent, PropType, ref } from 'vue';

import { ISlider } from '/@/types/recommend';
import useSlider from './use-slider';
import './style.scss';

export default defineComponent({
  name: 'Slider',
  props: {
    sliders: {
      type: Array as PropType<ISlider[]>,
      required: true,
    },
  },
  setup(props) {
    const rootRef = ref<HTMLElement | null>(null);
    const { currentPageIndex } = useSlider(rootRef);

    return () => {
      const { sliders } = props;
      return (
        <div class="slider" ref={rootRef}>
          <div class="slider-group">
            {sliders.map((item) => (
              <div class="slider-page" key={item.id}>
                <a href={item.link}>
                  <img src={item.pic} />
                </a>
              </div>
            ))}
          </div>
          <div class="dots-wrapper">
            {sliders.map((item, index) => (
              <span
                key={item.id}
                class={[
                  'dot',
                  {
                    active: currentPageIndex.value === index,
                  },
                ]}
              ></span>
            ))}
          </div>
        </div>
      );
    };
  },
});
