import React from 'react';

const SongSlider = () => {
  return (
    <section id="slider" style={styles.sliderSection}>
      <h2>Featured Songs</h2>
      <div style={styles.slider}>
        <div style={styles.songSlide}>🎵 Song 1</div>
        <div style={styles.songSlide}>🎵 Song 2</div>
        <div style={styles.songSlide}>🎵 Song 3</div>
      </div>
    </section>
  );
};

const styles = {
  sliderSection: {
    zIndex: '1',
    padding: '50px',
    textAlign: 'center',
  },
  slider: {
    display: 'flex',
    overflowX: 'scroll',
    padding: '20px',
    gap: '20px',
  },
  songSlide: {
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    padding: '40px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    minWidth: '200px',
  },
};

export default SongSlider;
