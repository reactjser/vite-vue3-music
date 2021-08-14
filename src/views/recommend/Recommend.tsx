import { computed, defineComponent, onMounted, ref } from 'vue';
import Slider from '/@/components/base/slider/Slider';
import { getRecommend } from '/@/service/recommend';
import { IAlbum, ISlider } from '/@/types/recommend';
import './style.scss';
import Scroll from '/@/components/base/scroll/Scroll';

export default defineComponent({
  name: 'Recommend',
  setup() {
    const sliders = ref<ISlider[]>([]);
    const albums = ref<IAlbum[]>([]);

    const loading = computed(
      () => !sliders.value.length && !albums.value.length,
    );

    onMounted(async () => {
      const result = await getRecommend();
      sliders.value = result.sliders;
      albums.value = result.albums;
    });

    return () => (
      <div class="recommend" v-loading={loading.value}>
        <Scroll class="recommend-content">
          <div>
            <div class="slider-wrapper">
              <div class="slider-content">
                {sliders.value.length > 0 && <Slider sliders={sliders.value} />}
              </div>
              <div class="recommend-list"></div>
            </div>
            <div class="recommend-list">
              <h1 class="list-title" v-show={!loading.value}>
                热门歌单推荐
              </h1>
              <ul>
                {albums.value.map((item) => (
                  <li class="item" key={item.id}>
                    <div class="icon">
                      <img width="60" height="60" v-lazy={item.pic} />
                    </div>
                    <div class="text">
                      <h2 class="name">{item.username}</h2>
                      <p class="title">{item.title}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Scroll>
      </div>
    );
  },
});
