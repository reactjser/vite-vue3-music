import { defineComponent, ref } from 'vue';
import loadingImage from './loading.gif';
import './style.scss';

export default defineComponent({
  name: 'Loading',
  setup(props, { expose }) {
    const title = ref('正在载入...');

    const setTitle = (newTitle: string) => {
      title.value = newTitle;
    };

    expose({
      setTitle,
    });

    return () => (
      <div class="loading">
        <div class="loading-content">
          <img width="24" height="24" src={loadingImage} />
          <p class="desc">{title.value}</p>
        </div>
      </div>
    );
  },
});
