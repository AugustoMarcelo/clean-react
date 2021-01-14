import { makeApiUrl } from '@/main/factories/http/'
import { LoadSurveyList } from '@/domain/usecases'
import { makeaAuthorizeHttpGetClientDecorator } from '@/main/factories/decorators'
import { RemoteLoadSurveyList } from '@/data/usecases/load-survey-list/remote-load-survey-list'

export const makeRemoteLoadSurveyList = (): LoadSurveyList => {
  return new RemoteLoadSurveyList(makeApiUrl('/surveys'), makeaAuthorizeHttpGetClientDecorator())
}
