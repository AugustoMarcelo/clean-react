import React from 'react'
import { Footer, Header, Icon, IconName } from '@/presentation/components'
import Styles from './survey-list-styles.scss'

const SurveyList: React.FC = () => {
  return (
    <div className={Styles.surveyListWrap}>
      <Header />

      <main className={Styles.contentWrap}>
        <h2>Enquetes</h2>
        <ul>
          <li>
            <div className={Styles.surveyContent}>
              <Icon className={Styles.iconWrap} iconName={IconName.thumbUp} />
              <time>
                <span className={Styles.day}>22</span>
                <span className={Styles.month}>03</span>
                <span className={Styles.year}>2021</span>
              </time>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, facilis.</p>
            </div>
            <footer>Ver Resultado</footer>
          </li>
        </ul>
      </main>

      <Footer />
    </div>
  )
}

export default SurveyList
