import { useRecoilValue } from "recoil";
import { playlistState } from "../atoms/playlistAtom";
import Song from "./Song";

function Songs() {
  const playlist = useRecoilValue(playlistState);
  return (
    <div className="px-8 flex flex-col space-y-1 pb-28 text-white">
      {playlist?.tracks?.items?.map((track, key) => {
        if (track.track) {
          return <Song key={key} track={track} order={key} />;
        }
      })}
    </div>
  );
}

export default Songs;
