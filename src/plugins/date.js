import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'

export default {
  install: (app) => {
    dayjs.extend(relativeTime);
    app.config.globalProperties.$timeAgo = (time) => {
      return dayjs(time).fromNow()
    }
    app.config.globalProperties.$formatDate = (time, format = 'DD/MM/YYYY') => {
      return dayjs(time).format(format)
    }
  }
}
