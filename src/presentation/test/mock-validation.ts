import { Validation } from '@/presentation/protocols/validation'

export class ValidationStub implements Validation {
  errorMessage: string
  fieldName: string
  fieldValue: string

  validate (fieldName: string, input: object): string {
    return this.errorMessage
  }
}
