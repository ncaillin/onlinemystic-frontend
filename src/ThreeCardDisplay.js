import { COLOURS } from './utils/config'
import { getImage } from './images/images'

const ThreeCardDisplay = ({ results }) => {
  const outerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100vw',
    minHeight: '20vh',
  }
  return (
    <div style={outerStyle}>
      {results.map((card, index) => {
        return <Card card={card} key={index}/>
      })}
    </div>
  )
}

const Card = ({ card }) => {
  const cardStyle = {
    minHeight: '100%',
    width: '30vw',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    border: `0.15vh solid ${COLOURS[0]}`,
    borderRadius: '0.5vh',
    overflow: 'hidden',
    position: 'relative',
  }
  const imageStyle = {
    maxWidth: '30vw',
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
  console.log(card)
  return (
    <div style={cardStyle}>
      <p style={headerStyle}>{card.name.replace(/_/g, " ")} {card.reversed ? 'reversed' : null}</p>
      {card.name !== 'select card' ? <img style={imageStyle} src={getImage(card.name, card.reversed)} alt={card.name}></img> : null}
    </div>
  )
}

export default ThreeCardDisplay