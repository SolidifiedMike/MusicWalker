export default function VerticalTile() {

  return (
    <div style={{
      width: '50px',
      height: '200px',
      backgroundColor: 'black',
      flexShrink: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '100%',
        backgroundColor: 'white',
      }}>
        <div style={{
          backgroundColor: 'black',
          height: '30px',
          width: '2000px',
          marginLeft: '40px',
          marginTop: '5px'
        }}>

        </div>
      </div>
    </div>
  )
}