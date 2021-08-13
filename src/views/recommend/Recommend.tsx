import { defineComponent, onMounted, ref } from 'vue';
import Slider from '/@/components/base/slider/Slider';
import { getRecommend } from '/@/service/recommend';
import { ISlider } from '/@/types/recommend';
import './style.scss';

export default defineComponent({
  name: 'Recommend',
  setup() {
    const sliders = ref<ISlider[]>([]);

    onMounted(async () => {
      const result = await getRecommend();
      sliders.value = result.sliders;
    });

    return () => (
      <div class="recommend">
        <div class="slider-wrapper">
          <div class="slider-content">
            {sliders.value.length && <Slider sliders={sliders.value} />}
          </div>
        </div>
      </div>
    );
  },
});
