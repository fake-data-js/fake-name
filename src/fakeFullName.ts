import { FirstNameOptions } from '@/index.types'
import { fakeFirstName, fakeLastName } from '.'

const fakeFullName = (options?: FirstNameOptions): string => {
  return `${fakeFirstName(options)} ${fakeLastName(options)}`
}

export { fakeFullName }
