import * as koaCompress from 'koa-compress'
import { Z_BEST_SPEED } from 'zlib'

interface ThresholdValue {
  threshold: any
}

class CompressHandler {
  register (opts: ThresholdValue) {
    return koaCompress({
      threshold: opts.threshold || '100kb',
      flush: Z_BEST_SPEED
    })
  }
}

const handler: CompressHandler = new CompressHandler()

export default handler
