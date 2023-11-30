import { strings } from '@/utils/strings';
import { notFound } from 'next/navigation';

export interface Iplaylist {
  id: string;
}

export default function Playlist({ id }: Iplaylist) {
  if (!id) {
    notFound();
  }
  return (
    <div className='flex items-center justify-center'>
      <div className='playlist-section border'>
        <h1>{strings.playlists.all}</h1>
      </div>
      <div className='playlist-section border'>x</div>
    </div>
  );
}
