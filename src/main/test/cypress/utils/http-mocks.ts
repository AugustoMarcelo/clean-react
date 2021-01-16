import faker from 'faker'

export const mockUnauthorizedError = (url: RegExp): void => {
  cy.server()
  cy.route({
    method: 'POST',
    url,
    status: 401,
    response: {
      error: faker.random.words()
    }
  })
  // cy.intercept('POST', url, {
  //   statusCode: 401,
  //   body: {
  //     error: faker.random.words()
  //   }
  // })
}

export const mockForbiddenError = (method: any, url: RegExp): void => {
  cy.intercept(method, url, {
    statusCode: 403,
    body: {
      error: faker.random.words()
    }
  })
}

export const mockServerError = (method: any, url: RegExp): void => {
  cy.intercept(method, url, {
    statusCode: faker.helpers.randomize([400, 404, 500]),
    body: {
      error: faker.random.words()
    }
  })
}

export const mockOk = (method: any, url: RegExp, responseBody: any): void => {
  cy.server()
  cy.route({
    method,
    url,
    status: 200,
    response: responseBody
  }).as('request')
  // cy.intercept(method, url, {
  //   statusCode: 200,
  //   body: responseBody
  // }).as('request')
}
