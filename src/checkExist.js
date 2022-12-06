import { access } from 'node:fs/promises';

export const checkExist = async(pathToFile) => {
  try {
    await access(pathToFile)
    return true
  } catch {
    return false
  }
}