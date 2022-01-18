import { data } from '@/data'
import { expect, test } from 'vitest'
import { fakeFirstName, fakeFullName, fakeLastName } from '@/index'

test('fakeFirstName', () => {
  expect(data['en_GB'].firstName).toContain(fakeFirstName())
  expect(data['en_GB'].firstName).toContain(fakeFirstName({ type: 'all' }))
})

test('fakeFirstName pl', () => {
  expect(data['pl'].firstName).toContain(fakeFirstName({ locale: 'pl' }))
  expect(data['pl'].firstName).toContain(
    fakeFirstName({ locale: 'pl', type: 'all' })
  )
})

test('fakeFirstName female', () => {
  expect(data['en_GB'].firstNameFemale).toContain(
    fakeFirstName({ type: 'female' })
  )
})

test('fakeFirstName male', () => {
  expect(data['en_GB'].firstNameMale).toContain(fakeFirstName({ type: 'male' }))
})

test('fakeLastName', () => {
  expect(data['en_GB'].lastName).toContain(fakeLastName())
})

test('fakeFullName', () => {
  const fullName = fakeFullName()
  const [firstName, lastName] = fullName.split(' ')

  expect(data['en_GB'].firstName).toContain(firstName)
  expect(data['en_GB'].lastName).toContain(lastName)
})
