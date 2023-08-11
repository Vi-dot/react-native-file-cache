import { Platform } from 'react-native'
import ReactNativeBlobUtil from 'react-native-blob-util'

class BaseDir {
  // @ts-ignore
  private static baseDIR: string = ReactNativeBlobUtil.fs.dirs.DocumentDir
  
  static setBaseDIR(baseDIR: string) {
    BaseDir.baseDIR = baseDIR
  }
  static getBaseDIR() {
    return BaseDir.baseDIR
  }
}

export default BaseDir