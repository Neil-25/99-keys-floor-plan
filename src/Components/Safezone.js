const Safezone = ({ zone }) => {
  const styles = {
    left: `${zone.x}px`,
    top: `${zone.y}px`,
    width: `${zone.width}px`,
    height: `${zone.height}px`,
  };

  return <div class='safe-zone' style={styles} />;
};

export default Safezone;