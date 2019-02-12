$('document').ready(() => {
  $('.close').click(() => {
    $('.flash').hide(100)
  })

  setTimeout(() => {
    $('.flash').hide(100)
  }, 5000);

  $('#deletePost').click((event) => {
    event.preventDefault()
    $('.ui.modal')
      .modal({
        closable: false,
        onDeny: () => {
          return
        },
        onApprove: () => {
          $.ajax({
            url: ''
          })
        }
      })
      .modal('show')
  })
})