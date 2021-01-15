import faker from 'faker'
import * as Http from '../support/http-mocks'

export const mockEmailInUseError = (): void => Http.mockForbiddenError('POST', /signup/)

export const mockUnexpectedError = (): void => Http.mockServerError('POST', /signup/)

export const mockOk = (): void => Http.mockOk('POST', /signup/, {
  body: {
    accessToken: faker.random.uuid(),
    name: faker.name.findName()
  }
})
