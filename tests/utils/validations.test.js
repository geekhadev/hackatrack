import { validateId } from '@/utils/validations'

it('should validate what is a valid id (a number)', () => {
  expect(validateId(1)).toBe(true)
})

it('should return error if id is not a number', () => {
  expect(validateId('a')).toBe(false)
})
