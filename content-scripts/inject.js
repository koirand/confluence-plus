(() => {
  const elid = 'GoogleAnalytics-apply'
  if (document.getElementById(elid)) return

  const script = document.createElement('script')
  script.src = chrome.runtime.getURL('content-scripts/ga-apply.js')
  script.async = true
  document.head.appendChild(script)
})();

(() => {
  const elid = 'GoogleAnalytics-script'
  if (document.getElementById(elid)) return

  const script = document.createElement('script')
  script.src = 'https://www.google-analytics.com/analytics.js'
  script.async = true
  document.head.appendChild(script)
})();

(() => {
  const elid = 'MathJax-config'
  if (document.getElementById(elid)) return

  const script = document.createElement('script')
  script.src = chrome.runtime.getURL('content-scripts/mathjax-config.js')
  script.defer = true
  document.head.appendChild(script)
})();

(() => {
  const elid = 'MathJax-script'
  if (document.getElementById(elid)) return

  const script = document.createElement('script')
  script.id = elid
  script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
  script.defer = true
  document.head.appendChild(script)
})();

(() => {
  const elid = 'MathJax-apply'
  if (document.getElementById(elid)) return

  const script = document.createElement('script')
  script.src = chrome.runtime.getURL('content-scripts/mathjax-apply.js')
  script.defer = true
  document.head.appendChild(script)
})()
