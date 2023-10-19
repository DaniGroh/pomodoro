import { Play } from 'phosphor-react'
import * as S from './styles'
import { useState } from 'react'

export function Home() {
  const [task, setTask] = useState('')

  // function handleSubmit(event) {
  //   event.target.task.value
  // }
  return (
    <S.HomeContainer>
      <form
        // onSubmit={handleSubmit}
        action=""
      >
        <S.FormConatiner>
          <label htmlFor="task"> Vou trabalhar em </label>
          <S.TaskInput
            id="task"
            // name="task"
            list="task-sugestions"
            placeholder="Dê um nome para seu projeto"
            onChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <datalist id="task-sugestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto Banana" />
            <option value="" />
          </datalist>

          <label htmlFor="">durante</label>
          <S.MinutesAmountInput
            type="number"
            id="minutesAmout"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </S.FormConatiner>

        <S.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>: </S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>

        <S.StartCoundownButton disabled={!task} type="submit">
          <Play size={24} />
          Começar
        </S.StartCoundownButton>
      </form>
    </S.HomeContainer>
  )
}
