(() => {
  const script = document.createElement('script')
  script.src = chrome.runtime.getURL('content-script/mathjax-config.js')
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
  const script = document.createElement('script')
  script.src = chrome.runtime.getURL('content-script/mathjax-apply.js')
  script.defer = true
  document.head.appendChild(script)
})()
