type DataLocales = {
  [locale in NameLocales]: {
    firstName: string[]
    firstNameFemale: string[]
    firstNameMale: string[]
    lastName: string[]
  }
}

type FirstNameOptions = {
  locale?: NameLocales
  type?: 'female' | 'male'
}

enum FirstNameKeys {
  all = 'firstName',
  female = 'firstNameFemale',
  male = 'firstNameMale',
}

enum LastNameKeys {
  lastName = 'lastName',
}

type LastNameOptions = {
  locale?: NameLocales
}

type NameLocales = 'en_GB' | 'pl'

export {
  DataLocales,
  FirstNameKeys,
  FirstNameOptions,
  LastNameKeys,
  LastNameOptions,
  NameLocales,
}
