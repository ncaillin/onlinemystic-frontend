const BACKEND_URL = process.env.REACT_APP_MODE === 'DEV'
  ? 'http://192.168.0.105:8000'
  : process.env.BACKEND_URL

const COLOURS = [
  '#52D1DC',
  '#D0DB97',
  '#4E6E5D',
  '#966B9D',
  '#0B132B',
]

export { BACKEND_URL, COLOURS }