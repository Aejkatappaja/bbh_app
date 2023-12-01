interface IPlaylist {
  playlist: number[];
}

export type IVideos = {
  id: string;
  status: string;
  sort: null;
  youtube_id: string;
  title: string;
  description: string;
  cover: string;
  duration: number;
  view_count: number;
  like_count: number;
  date_published: string;
  playlist: IPlaylist;
};

export type ITotalVideos = { data: IVideos[] };
export async function getVideosList({
  id,
  view,
}: {
  id?: string;
  view?: boolean;
}): Promise<ITotalVideos | undefined> {
  const url = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const res = await fetch(
      id
        ? `https://api.brest.life/items/video?filter[id][_eq]=${id}`
        : view
          ? 'https://api.brest.life/items/video?sort=-view_count'
          : `${url}/items/video`,
      {
        method: 'GET',
      }
    );

    const response: ITotalVideos = await res.json();

    console.log(response, 'response');

    return response;
  } catch (error: unknown) {
    console.error(error);
    throw new Error('failed to fetch Videos data');
  }
}
