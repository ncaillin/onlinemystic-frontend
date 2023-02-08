import { useState } from "react"
import ThreeCardDisplay from "./ThreeCardDisplay"
import { getMajorTarotReadingWithCards } from "./services/getReading"

import { COLOURS } from "./utils/config"

const cardList = [
  {name: 'select card', value: {name: 'select card'}},
  {name: 'chariot', value: {name: 'chariot', reversed: false}},
  {name: 'chariot reversed', value: {name: 'chariot', reversed: true}},
  {name: 'death', value: {name: 'death', reversed: false}},
  {name: 'death reversed', value: {name: 'death', reversed: true}},
  {name: 'devil', value: {name: 'devil', reversed: false}},
  {name: 'devil reversed', value: {name: 'devil', reversed: true}},
  {name: 'emperor', value: {name: 'emperor', reversed: false}},
  {name: 'emperor reversed', value: {name: 'emperor', reversed: true}},
  {name: 'empress', value: {name: 'empress', reversed: false}},
  {name: 'empress reversed', value: {name: 'empress', reversed: true}},
  {name: 'fool', value: {name: 'fool', reversed: false}},
  {name: 'fool reversed', value: {name: 'fool', reversed: true}},
  {name: 'hanged man', value: {name: 'hanged_man', reversed: false}},
  {name: 'hanged man reversed', value: {name: 'hanged_man', reversed: true}},
  {name: 'hermit', value: {name: 'hermit', reversed: false}},
  {name: 'hermit reversed', value: {name: 'hermit', reversed: true}},
  {name: 'hierophant', value: {name: 'hierophant', reversed: false}},
  {name: 'hierophant reversed', value: {name: 'hierophant', reversed: true}},
  {name: 'high priestess', value: {name: 'high_priestess', reversed: false}},
  {name: 'high priestess reversed', value: {name: 'high_priestess', reversed: true}},
  {name: 'judgement', value: {name: 'judgement', reversed: false}},
  {name: 'judgement reversed', value: {name: 'judgement', reversed: true}},
  {name: 'justice', value: {name: 'justice', reversed: false}},
  {name: 'justice reversed', value: {name: 'justice', reversed: true}},
  {name: 'lovers', value: {name: 'lovers', reversed: false}},
  {name: 'lovers reversed', value: {name: 'lovers', reversed: true}},
  {name: 'magician', value: {name: 'magician', reversed: false}},
  {name: 'magician reversed', value: {name: 'magician', reversed: true}},
  {name: 'moon', value: {name: 'moon', reversed: false}},
  {name: 'moon reversed', value: {name: 'moon', reversed: true}},
  {name: 'star', value: {name: 'star', reversed: false}},
  {name: 'star reversed', value: {name: 'star', reversed: true}},
  {name: 'strength', value: {name: 'strength', reversed: false}},
  {name: 'strength reversed', value: {name: 'strength', reversed: true}},
  {name: 'sun', value: {name: 'sun', reversed: false}},
  {name: 'sun reversed', value: {name: 'sun', reversed: true}},
  {name: 'temperance', value: {name: 'temperance', reversed: false}},
  {name: 'temperance reversed', value: {name: 'temperance', reversed: true}},
  {name: 'tower', value: {name: 'tower', reversed: false}},
  {name: 'tower reversed', value: {name: 'tower', reversed: true}},
  {name: 'wheel of fortune', value: {name: 'wheel_of_fortune', reversed: false}},
  {name: 'wheel of fortune reversed', value: {name: 'wheel_of_fortune', reversed: true}},
  {name: 'world', value: {name: 'world', reversed: false}},
  {name: 'world reversed', value: {name: 'world', reversed: true}},

]

const CardForm = ({ setAppStage, setReading }) => {
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '5vh',
    alignItems: 'center',

  }
  const buttonStyle = {
    backgroundColor: COLOURS[0],
    color: COLOURS[4],
    width: '60vw',
    height: '10vw',
    borderRadius: '2vw',
    borderStyle: 'solid',
    marginTop: '2vh',
    borderColor: COLOURS[1],
  }
  const inputStyle = {
    width: '80vw',
    height: '5vh',
    marginBottom: '3vh',
    marginTop: '2vh'
  }
  const [card1, setCard1] = useState({name: 'select card'})
  const [card2, setCard2] = useState({name: 'select card'})
  const [card3, setCard3] = useState({name: 'select card'})
  const submitHandler = (event) => {
    event.preventDefault()
    getMajorTarotReadingWithCards([card1, card2, card3])
      .then(result => {
        console.log(result)
        setReading(result)
        setAppStage('Display Results')
      })
  }
  return (
    <div>
      <ThreeCardDisplay results={[card1, card2, card3]}/>
      <form style={formStyle} onSubmit={event => submitHandler(event)}>
        <label htmlFor="card 1">your first card</label>
        <select style={inputStyle} id="card 1" name="card 1" onChange={event => setCard1(cardList.filter(item => item.name === event.target.value)[0].value)}>
          {cardList.map(card => {
            return <option value={card.name} key={card.name}>{card.name}</option>
          })}
        </select>
        <label htmlFor="card 2">your second card</label>
        <select style={inputStyle} id="card 2" name="card 2" onChange={event => setCard2(cardList.filter(item => item.name === event.target.value)[0].value)}>
          {cardList.map(card => {
            return <option value={card.name} key={card.name}>{card.name}</option>
          })}
        </select>
        <label htmlFor="card 3">your third card</label>
        <select style={inputStyle} id="card 3" name="card 3" onChange={event => setCard3(cardList.filter(item => item.name === event.target.value)[0].value)}>
          {cardList.map(card => {
            return <option value={card.name} key={card.name}>{card.name}</option>
          })}
        </select>
        <button style={buttonStyle} type="submit">submit</button>
      </form>
    </div>
  )
}

export default CardForm