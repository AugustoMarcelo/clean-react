import faker from 'faker'
import * as Helper from '../support/http-mocks'

export const mockEmailInUseError = (): void => Helper.mockEmailInUseError(/signup/)

export const mockUnexpectedError = (): void => Helper.mockUnexpectedError('POST', /signup/)

export const mockInvalidData = (): void => Helper.mockOk('POST', /signup/, {
  body: {
    invalidProperty: faker.random.uuid()
  }
})
