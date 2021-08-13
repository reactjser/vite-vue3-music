import { defineComponent, onMounted } from 'vue';
import { getRecommend } from '/@/service/recommend';

export default defineComponent({
  name: 'Recommend',
  setup() {
    onMounted(async () => {
      const data = await getRecommend();
      console.log(data);
    });

    return () => <div>Recommend</div>;
  },
});
