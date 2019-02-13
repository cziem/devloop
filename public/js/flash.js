$('document').ready(() => {
  $('.close').click(() => {
    $('.flash').hide(100)
  })

  setTimeout(() => {
    $('.flash').hide(100)
  }, 5000);

  let blogId = window.location.pathname.split('/')[2]
  let url = '/blogs/' + blogId
  console.log(url)

  $('#deletePost').click((event) => {
    event.preventDefault()
    $('.ui.modal')
      .modal({
        closable: false,
        onDeny: () => {
          return
        },
        onApprove: () => {
          // axios.delete(`/blogs/${blogId}`)
          //   .then(res => console.log(res))
          // $.ajax({
          //   url: `/blogs/${blogId}?_method=DELETE`,
          //   // type: 'DELETE',
          //   // success: function(response) {
          //   //   console.log(response)
          //   //   return true
          //   // }
          // })
        }
      })
      .modal('show')
  })
})