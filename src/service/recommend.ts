import { IAlbums, ISlider } from '../types/recommend';
import { get } from './base';

interface RecommendResponse {
  albums: IAlbums[];
  sliders: ISlider[];
}

export const getRecommend = (): Promise<RecommendResponse> =>
  get('/api/getRecommend');

export const getAlbum = (album: { id: string }): Promise<unknown> =>
  get('/api/getAlbum', {
    id: album.id,
  });
