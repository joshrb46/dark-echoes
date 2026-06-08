import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setselectedEpisode] = useState();

  /** Information about the selected episode */
  function EpisodeDescription() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to learn more!</p>
        </section>
      );
    }
    return (
      <section className="details">
        <h2>Episode {selectedEpisode.id}</h2>
        <h3>{selectedEpisode.title}</h3>
        <p>{selectedEpisode.description}</p>
        <button>Watch Now</button>
        <button>👍</button>
      </section>
    );
  }
  /** List of Episodes that users can select from */
  function EpisodesList() {
    return (
      <section className="episodes">
        <h2>Episodes</h2>
        <ol>
          {episodes.map((episode) => (
            <li
              key={episode.id}
              onClick={() => setselectedEpisode(episode)}
              className={selectedEpisode?.id === episode.id ? "selected" : ""}
            >
              {episode.title}
            </li>
          ))}
        </ol>
      </section>
    );
  }
  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodesList />
        <EpisodeDescription />
      </main>
    </>
  );
}
