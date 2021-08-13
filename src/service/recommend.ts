import { Albums, Slide } from '../types/recommend';
import { get } from './base';

interface RecommendResponse {
  albums: Albums[];
  sliders: Slide[];
}

export const getRecommend = (): Promise<RecommendResponse> =>
  get('/api/getRecommend');

export const getAlbum = (album: { id: string }): Promise<unknown> =>
  get('/api/getAlbum', {
    id: album.id,
  });
