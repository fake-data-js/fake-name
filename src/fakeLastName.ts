import { data } from '@/data'
import { DEFAULT_LOCALE } from '@/index.const'
import { NameLocales, LastNameKeys, LastNameOptions } from '@/index.types'

const fakeLastName = (options?: LastNameOptions): string => {
  const locale: NameLocales = options?.locale ? options.locale : DEFAULT_LOCALE

  const firstNameList = data[locale][LastNameKeys.lastName]

  return firstNameList[Math.floor(Math.random() * firstNameList.length)]
}

export { fakeLastName }
