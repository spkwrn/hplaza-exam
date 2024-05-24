import React from "react";

interface LeaderboardProps {
  scores: { name: string; score: number }[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ scores }) => {
  const sortedScores = [...scores].sort((a, b) => b.score - a.score);
  return (
    <div>
      <h2>Leaderboard</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>NO.</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Scores</th>
          </tr>
        </thead>
        <tbody>
          {sortedScores.map((entry, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {index + 1}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {entry.name}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {entry.score}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
