import faker from 'faker'
import * as Http from '../support/http-mocks'

export const mockInvalidCredentialsError = (): void => Http.mockUnauthorizedError(/login/)

export const mockUnexpectedError = (): void => Http.mockServerError('POST', /login/)

export const mockOk = (): void => Http.mockOk('POST', /login/, {
  body: {
    accessToken: faker.random.uuid(),
    name: faker.name.findName()
  }
})
