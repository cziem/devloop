$('document').ready(() => {
  $('.close').click(() => {
    $('.flash').hide(100)
  })

  setTimeout(() => {
    $('.flash').hide(100)
  }, 5000);
})