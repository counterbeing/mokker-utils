import axios from 'axios'
import fs from 'fs-extra'
import { join } from 'path'
import moment from 'moment'

const url = 'https://raw.githubusercontent.com/easylist/easylist/master/easylist/easylist_general_hide.txt'
const fileName = 'easylist_general_hide.txt'

const validRulesAlreadyExist = async (path)  => {
  console.log('checking path ' + path)
  let present = await fs.pathExists(path)
  if(!(present)) return false
  let startTime
  await fs.stat(path, (err, stats) => startTime = moment(stats.mtime))
  let endTime  = moment(new Date())
  let difference = endTime.diff(startTime, 'days')
  if(difference < 5) return true
  return false
}

const ruleDownloader = async (opts) => {
  console.log('Checking on rules file.')
  let filePath
  if (opts && opts.dir) {
    filePath = join(opts.dir, fileName)
  } else {
    filePath = fileName
  }

  if(await validRulesAlreadyExist(filePath)) return

  try {
    console.log('Downloading fresh rules file.')
    let content = await axios.get(url)
    return await fs.outputFile(filePath, content.data)
  } catch(err) {
    console.log(err)
    console.log('Rules are missing')
  }
}

export default ruleDownloader
