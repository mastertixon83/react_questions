import { useState } from 'react'
import Game from './components/Game/Game'
import Result from './components/Result/Result'

const questions = [
  {
    title: "React - это... ?",
    variants: ["библиотека","фреймворк","приложение"],
    correct: 0
  },
  {
    title: "Компонент - это ... ?",
    variants: ["приложение","часть приложения","я не знаю"],
    correct: 1
  },
  {
    title: "Yarn - это ... ?",
    variants: ["Пакетный менеджер","Викиннг","Автомобиль"],
    correct: 0
  }
]


function App() {
  const [step, setStep] = useState(0)
  const question = questions[step]
  const [correct, setCorrect] = useState(0)

  const onClickVariant = (index) => {
    setStep(step + 1)
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
        {
          step < questions.length ?
          <Game questions={questions} step={step} question={question} onClickVariant={onClickVariant}/>
          : <Result correct={correct} questions={questions}/>
        }

    </div>
  )
}

export default App
