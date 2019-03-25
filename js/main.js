$(function () {
  $('form').on('submit', function (event) {
    event.preventDefault();
    // reset
    //this.reset();
    // or $(this)[0].reset();

    // получаем action
    this.getAttribute('action');

    // получаем method
    this.getAttribute('method');

    $.ajax({
      type: this.getAttribute('method'),
      url: this.getAttribute('action'),
      data: new FormData(this),
      contentType: false,
      cache: false,
      processData: false,
      success: function (result) {
        console.log(result);
      },
      error: function (result) {
        console.log('Error',result);
      }
    });
  });
});