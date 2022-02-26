export default function VerticalTile({ isActive }) {

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
          marginTop: '5px',
          transform: isActive ? 'scaleY(2.5)' : '',
          transition: 'ease-out 400ms',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            color: 'white',
            opacity: isActive ? '1' : '0',
            transition: 'opacity 0.5s',
            marginLeft: '40px'
          }}>
            <div style={{
              transform: 'scaleX(2.5) translateX(40%)'
            }} >
              Music1 by Mike
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}