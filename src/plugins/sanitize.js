import sanitizeHtml from 'sanitize-html';

export default {
  install: (app) => {
    app.config.globalProperties.$sanitizeHtml = (dirty, options = {}) => {
      return sanitizeHtml(dirty, options)
    }
  }
}
