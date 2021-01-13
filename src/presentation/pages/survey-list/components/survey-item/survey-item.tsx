import React from 'react'
import { Icon, IconName } from '@/presentation/components'

import Styles from './survey-item-styles.scss'

const SurveyItem: React.FC = () => {
  return (
    <li className={Styles.surveyItemWrap}>
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
  )
}

export default SurveyItem
