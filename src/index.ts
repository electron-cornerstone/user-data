import { app } from 'electron'

const userDataPath = app.getPath('userData')

export function readUserConfig (userId: string | number) {
  if (!userId) {
    return null
  }

}
