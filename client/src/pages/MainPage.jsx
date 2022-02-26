import VerticalTile from "../components/VerticalTile"

export default function MainPage() {
  const roads = [1, 1, 1, 1, 1, 1, 1, 1]
  return (
    <div>
      {roads.map((_, index) => {
        <VerticalTile />
      })}
    </div>
  )
}