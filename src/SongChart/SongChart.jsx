import React from 'react';

const SongChart = () => {
  return (
    <section id="chart" style={styles.chartSection}>
      <h2>Top Chart Songs</h2>
      <ul style={styles.songChart}>
        <li>1. Song A</li>
        <li>2. Song B</li>
        <li>3. Song C</li>
        <li>4. Song D</li>
        <li>5. Song E</li>
      </ul>
    </section>
  );
};

const styles = {
  chartSection: {
    padding: '50px',
    textAlign: 'center',
    backgroundColor: "black",
  },
  songChart: {
    listStyle: 'none',
    padding: 0,
  },
  songChartItem: {
    fontSize: '18px',
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

export default SongChart;
