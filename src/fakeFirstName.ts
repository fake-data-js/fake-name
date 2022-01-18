import { data } from '@/data'
import { DEFAULT_LOCALE } from '@/index.const'
import { NameLocales, FirstNameOptions, FirstNameKeys } from '@/index.types'

const fakeFirstName = (options?: FirstNameOptions): string => {
  const locale: NameLocales = options?.locale ? options.locale : DEFAULT_LOCALE

  const firstNameList: string[] =
    data[locale][FirstNameKeys[options?.type || 'all']]

  return firstNameList[Math.floor(Math.random() * firstNameList.length)]
}

export { fakeFirstName }
