import PosterCard from "../components/PosterCard";
import { posters } from "../Data";

export default function PosterPage() {
  return (
    <main>
      <h2>Poster Page</h2>

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
