import { atom } from 'jotai'

import { atomWithStorage } from 'jotai/utils'

import { SettingScreen } from '@/screens/Settings'

export const selectedSettingAtom = atom<SettingScreen | string>('My Models')

export const janSettingScreenAtom = atom<SettingScreen[]>([])

export const THEME = 'themeAppearance'
export const REDUCE_TRANSPARENT = 'reduceTransparent'
export const SPELL_CHECKING = 'spellChecking'
export const THEME_DATA = 'themeData'
export const THEME_OPTIONS = 'themeOptions'
export const THEME_PATH = 'themePath'
export const themesOptionsAtom = atomWithStorage<
  { name: string; value: string }[]
>(THEME_OPTIONS, [], undefined, { getOnInit: true })
export const janThemesPathAtom = atomWithStorage<string | undefined>(
  THEME_PATH,
  undefined,
  undefined,
  { getOnInit: true }
)
export const selectedThemeIdAtom = atomWithStorage<string>(
  THEME,
  '',
  undefined,
  { getOnInit: true }
)
export const themeDataAtom = atomWithStorage<Theme | undefined>(
  THEME_DATA,
  undefined,
  undefined,
  { getOnInit: true }
)
export const reduceTransparentAtom = atomWithStorage<boolean>(
  REDUCE_TRANSPARENT,
  false,
  undefined,
  { getOnInit: true }
)
export const spellCheckAtom = atomWithStorage<boolean>(
  SPELL_CHECKING,
  false,
  undefined,
  { getOnInit: true }
)
