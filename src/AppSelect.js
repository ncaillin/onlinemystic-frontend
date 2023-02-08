import { COLOURS } from "./utils/config"

import { getTitleImage } from "./images/getTitleImages"

const AppSelect = () => {
  const outerStyle = {
    display: 'flex',
    flexGrow: '1',
    backgroundColor: COLOURS[2],
    flexDirection: 'column',
    color: COLOURS[1],
    alignItems: 'center',
    textAlign: 'center',

  }
  return (
    <div style={outerStyle}>
      <h2>Welcome to online mystic</h2>
      <p>select an app from the cards below</p>
      <Card card={{name: 'world_reversed', text: 'major arcana'}} />
    </div>
  )
}

const Card = ({ card }) => {
  const cardStyle = {
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    border: `0.3vh solid ${COLOURS[0]}`,
    borderRadius: '0.5vh',
    overflow: 'hidden',
    position: 'relative',
  }
  const imageStyle = {
    maxHeight: '60vh',
    objectFit: 'cover',
  }
  const headerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexGrow: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '0px',
    margin: '0px',
    minHeight: '20%',
    width: '100%',
  }
  return (
    <div style={cardStyle} onClick={() => window.location.href='/major-tarot'}>
      <h1 style={headerStyle}>{card.text}</h1>
      <img style={imageStyle} src={getTitleImage(card.name)} alt={card.text}></img>
    </div>
  )
}

export default AppSelect