import { envConfig } from './utils'
function assetsPath( _path) {
  return path.posix.join(envConfig.assetsSubDirectory, _path)
}

export default {
  assetsPath
}