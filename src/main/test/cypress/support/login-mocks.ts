import faker from 'faker'
import * as Helper from '../support/http-mocks'

export const mockInvalidCredentialsError = (): void => Helper.mockInvalidCredentialsError(/login/)

export const mockUnexpectedError = (): void => Helper.mockUnexpectedError('POST', /login/)

export const mockOk = (): void => Helper.mockOk('POST', /login/, {
  body: {
    accessToken: faker.random.uuid(),
    name: faker.name.findName()
  }
})

export const mockInvalidData = (): void => Helper.mockOk('POST', /login/, {
  body: {
    invalidProperty: faker.random.uuid()
  }
})
