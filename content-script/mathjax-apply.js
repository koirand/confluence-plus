window.setInterval(() => {
  // Exclude edit mode
  if (location.href.indexOf('edit-v2') === -1) {
    // eslint-disable-next-line no-undef
    MathJax.typeset()
  }
}, 1000)
