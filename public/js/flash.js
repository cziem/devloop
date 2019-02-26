$("document").ready(() => {
  $(".close").click(() => {
    $(".flash").hide(100);
  });

  setTimeout(() => {
    $(".flash").hide(100);
  }, 5000);

  $("#deletePost").click(event => {
    event.preventDefault();
    $(".ui.modal")
      .modal({
        closable: false,
        onDeny: () => {
          return;
        },
        onApprove: data => {
          let blogId = window.location.pathname.split("/")[2];
          let url = "/blogs/" + blogId;
          $.ajax({
            url: url,
            type: "DELETE",
            timeout: 5000,
            success: function(data) {
              location.replace("/blogs");
            }
          });
        }
      })
      .modal("show");
  });

  $(".header.item.logo").click(() => {
    location.replace("/");
  });

  $("#likes").click(event => {
    event.preventDefault();
    let blogId = window.location.pathname.split("/")[2];
    let url = "/blogs/" + blogId + "/like";

    $.ajax({
      url,
      type: "POST",
      success: function(data) {
        $("#like-count").text(data.likes);
      }
    });
  });

  $(".ui.circular.red").click(event => {
    event.preventDefault();
    let blogId = window.location.pathname.split("/")[2];
    let url = "/blogs/" + blogId + "/like";

    $.ajax({
      url,
      type: "POST",
      success: function(data) {
        $("#like-count").text(data.likes);
      }
    });
  });
});
