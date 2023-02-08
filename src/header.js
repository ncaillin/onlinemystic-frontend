import { COLOURS } from "./utils/config"

const Header = () => {
  
  const headerStyle = {
    width: '100vw',
    height: '10vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOURS[4],
    color: COLOURS[3],
  }
  return (
    <div style={headerStyle}>
      <h1>online mystic</h1>
    </div>
  )
}

export default Header