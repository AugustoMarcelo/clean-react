import React, { useEffect, useState } from 'react'
import { Footer, Header } from '@/presentation/components'
import { Error, SurveyContext, SurveyListItem } from '@/presentation/pages/survey-list/components'
import { LoadSurveyList } from '@/domain/usecases'
import Styles from './survey-list-styles.scss'
import { SurveyModel } from '@/domain/models'

type Props = {
  loadSurveyList: LoadSurveyList
}

const SurveyList: React.FC<Props> = ({ loadSurveyList }: Props) => {
  const [state, setState] = useState({
    surveys: [] as SurveyModel[],
    error: ''
  })

  useEffect(() => {
    loadSurveyList.loadAll()
      .then(surveys => setState({ ...state, surveys }))
      .catch(error => setState({ ...state, error: error.message }))
  }, [])

  return (
    <div className={Styles.surveyListWrap}>
      <Header />

      <main className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <SurveyContext.Provider value={{ state, setState }}>
          {state.error ? <Error /> : <SurveyListItem />}
        </SurveyContext.Provider>
      </main>

      <Footer />
    </div>
  )
}

export default SurveyList
