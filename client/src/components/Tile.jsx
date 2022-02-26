export default function Tile({ tileInfo }) {
  const color = tileInfo['color'];
  return (
    <div>
      <div
        style={{
          boxShadow: '0px 0px 0px 4px black inset',
          height: '35px',
          width: '100px',
          flexShrink: '0',
          backgroundColor: color,
        }}
      />
    </div>
  );
}
