/* global ga */
window.ga = window.ga || function () { (ga.q = ga.q || []).push(arguments) }; ga.l = +new Date()
ga('create', 'UA-154994698-1', 'auto')

let locationCache = ''
window.setInterval(() => {
  // Only pages
  if (location.href.indexOf('pages') >= 0) {
    // Only when url chenged
    const locationCurrent = trimUrl(location.href)
    if (locationCache !== locationCurrent) {
      locationCache = locationCurrent
      sendMessage()
    }
  }
}, 1000)

const sendMessage = () => {
  // Check if page have been loaded.
  if (document.title !== 'Confluence') {
    ga('send', 'pageview', trimPath(location.pathname))
  } else {
    setTimeout(sendMessage, 100)
  }
}

const trimUrl = (url) => {
  const ulist = url.split('/').splice(0, 8)
  return ulist.join('/')
}

const trimPath = (path) => {
  const ulist = path.split('/').splice(0, 6)
  return ulist.join('/')
}
