import React from "react";

function ExplorePage({ onBack }) {
  return (
    <div className="explorePage">
      <button onClick={onBack}>
        ← Back
      </button>

      <h1>Explore</h1>
      <p>Welcome to Anshu's World.</p>
    </div>
  );
}

export default ExplorePage;
