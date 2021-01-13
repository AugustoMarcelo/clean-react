import React, { useEffect, useState } from 'react'
import { Footer, Header } from '@/presentation/components'
import { SurveyItem, SurveyItemEmpty } from '@/presentation/pages/survey-list/components'
import { LoadSurveyList } from '@/domain/usecases'
import Styles from './survey-list-styles.scss'
import { SurveyModel } from '@/domain/models'

type Props = {
  loadSurveyList: LoadSurveyList
}

const SurveyList: React.FC<Props> = ({ loadSurveyList }: Props) => {
  const [state, setState] = useState({
    surveys: [] as SurveyModel[]
  })

  useEffect(() => {
    loadSurveyList.loadAll().then(surveys => setState({ surveys }))
  }, [])

  return (
    <div className={Styles.surveyListWrap}>
      <Header />

      <main className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <ul data-testid="survey-list">
          {state.surveys.length
            ? state.surveys.map(survey => <SurveyItem key={survey.id} survey={survey} />)
            : <SurveyItemEmpty />
          }
        </ul>
      </main>

      <Footer />
    </div>
  )
}

export default SurveyList
