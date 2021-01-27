import { useEffect } from 'react'
import { emoji } from 'emoji-unicode-map';
import EmojiButton from './EmojiButton'

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList

const emojiNames = Object.values(emoji).map((name) => name.replace(/_/g,' '))
const grammar = '#JSGF V1.0; grammar colors; public <color> = ' + emojiNames.join(' | ') + ' ;'

const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);

const startRecognition = () => {
  recognition.start()
}

recognition.onspeechend = () => {
  recognition.stop();
}

const emojisByName = Object.entries(emoji).reduce((prev, [icon, name]) => {
  prev[name] = icon
  return prev
}, {})

let setOnResult

const Speech = ({ onSelect }) => {
  useEffect(() => {
    if (!setOnResult) {
      setOnResult = true
      recognition.onresult = (event) => {
        const emojiName = (event.results[0][0].transcript || '').toLowerCase()
        onSelect(emojisByName[emojiName])
        console.log('emojiName', emojiName)
        console.log('Confidence: ' + event.results[0][0].confidence);
      }
    }
  }, [])

  return (
    <EmojiButton onClick={startRecognition}>🎙</EmojiButton>
  )
}

export default Speech
