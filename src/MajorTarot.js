import { COLOURS } from "./utils/config"
import { getMajorTarotReading } from "./services/getReading"
import ThreeCardDisplay from "./ThreeCardDisplay"
import { useEffect, useState } from "react"
import { getImage } from "./images/images"
import CardForm from './CardForm'

const MajorTarot = () => {
  const outerStyle = {
    display: 'flex',
    flexGrow: '1',
    backgroundColor: COLOURS[2],
    color: COLOURS[1],
    paddingTop: '5vh',
    paddingLeft: '2vw',
    paddingRight: '2vw',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  }
  const [appStage, setAppStage] = useState('Intro')
  const [reading, setReading] = useState([])

  return (
    <div style={outerStyle}>
      {appStage === 'Intro' ? <Intro setAppStage={setAppStage}/> : null}
      {appStage === 'Generating Reading' ? <GeneratingReading setAppStage={setAppStage} setReading={setReading}/> : null}
      {appStage === 'Recieving Reading' ? <CardForm setAppStage={setAppStage} setReading={setReading} /> : null}
      {appStage === 'Display Results' ? <DisplayResults setAppStage={setAppStage} reading={reading}/> : null}
    </div>
  )
}

const Intro = ({ setAppStage }) => {
  const buttonStyle = {
    backgroundColor: COLOURS[0],
    color: COLOURS[4],
    minWidth: '60vw',
    minHeight: '10vw',
    borderRadius: '2vw',
    borderStyle: 'solid',
    marginTop: '2vh',
    borderColor: COLOURS[1],
  }
  return (
    <div>
      <h2>major arcana</h2>
      <p>press the button below to get a tarot reading using your major arcana, alternatively if you would prefer
        to use your own deck and enter the cards you draw, use the next button
      </p>
      <button style={buttonStyle} onClick={() => setAppStage('Generating Reading')}><h2>get my reading</h2></button>
      <button style={buttonStyle} onClick = {() => setAppStage('Recieving Reading')}><h2>use my own deck</h2></button>
      <button style={buttonStyle} onClick = {() => window.location.href='/'}><h2>home</h2></button>
    </div>
  )
}

const GeneratingReading = ({ setAppStage, setReading }) => {
  useEffect(() => {
    getMajorTarotReading()
      .then(result => {
        setReading(result)
        setAppStage('Display Results')
      })
  })
  return (
    <div>
      <h1>generating your reading...</h1>
    </div>
  )
}

const DisplayResults = ({ setAppStage, reading }) => {
  const buttonStyle = {
    backgroundColor: COLOURS[0],
    color: COLOURS[4],
    minWidth: '60vw',
    minHeight: '10vw',
    borderRadius: '2vw',
    borderStyle: 'solid',
    marginTop: '2vh',
    marginBottom: '15vh',
    borderColor: COLOURS[1],
  }
  
  const resultStr = reading.replace(/'/g, '"').toLowerCase()
  console.log('foo')
  console.log(resultStr)
  const resultObj = JSON.parse(resultStr)
  return (
    <div>
      <h1>Results:</h1>
      <ThreeCardDisplay results={resultObj}/>
      <p>scroll down for a detailed summary of each card</p>
      {resultObj.map(card => {
        return <Card card={card} key={card.name} />
      })}
      <button style={buttonStyle} onClick={() => window.location.href='/'}>home</button>
    </div>
  )
}

const Card = ({ card }) => {
  const imageStyle = {
    maxHeight: '60vh',
    objectFit: 'cover',
    border: `0.4vh solid ${COLOURS[0]}`,
    borderRadius: '0.5vh',
    overflow: 'hidden',
    position: 'relative',
  }
  return (
    <div>
      <h2>{card.name.replace(/_/g, " ")} {card.reversed ? 'reversed' : null}</h2>
      <img style={imageStyle} src={getImage(card.name, card.reversed)} alt={card.name}></img>
      {card.meaning.split('<br/>').map(string => {
        return (
          <p>{string}</p>
        )
      })}
    </div>
  )
}

export default MajorTarot