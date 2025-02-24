import PosterCard from "../components/PosterCard";
import { posters } from "../Data";

export default function PosterPage() {
  return (
    <main>
      <h2>THE SPECTRUM COLLECTION</h2>
      <h3>"Where two colors meet, a new beauty emerges."</h3>
      <p>
        Discover the elegance of contrast and unity in Spectrum. Spectrum is a
        collection that celebrates the power of color in contemporary art.
        Perfect for those who appreciate how color transforms a space,
        "Spectrum" brings dynamic energy and creativity into any room.
      </p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {posters.map((poster) => (
          <PosterCard
            key={poster.id}
            image={poster.image}
            title={poster.title}
          />
        ))}
      </div>
    </main>
  );
}
