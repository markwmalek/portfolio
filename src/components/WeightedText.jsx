function WeightedText({ text, breakAfter }) {
  const words = text.split(' ');
  const weights = [800, 600, 300];

  return words.map((word, i) => (
    <span key={i}>
      <span style={{ fontWeight: weights[Math.min(i, weights.length - 1)] }}>
        {word}
      </span>
      {i === breakAfter ? <br /> : i < words.length - 1 ? ' ' : ''}
    </span>
  ));
}

export default WeightedText;
