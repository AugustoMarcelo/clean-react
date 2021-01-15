import * as Http from '../support/http-mocks'

export const mockUnexpectedError = (): void => Http.mockServerError('GET', /surveys/)
export const mockAccessDeniedError = (): void => Http.mockForbiddenError('GET', /surveys/)
