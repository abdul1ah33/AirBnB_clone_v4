$(document).ready(function () {
  const amenitiesChecked = {};

  // Existing code to handle checkbox changes
  $('input[type="checkbox"]').change(function () {
    if (this.checked) {
      amenitiesChecked[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenitiesChecked[$(this).data('id')];
    }

    const amenitiesList = Object.values(amenitiesChecked).join(', ');
    $('.amenities h4').text(amenitiesList);
  });

  $.get('http://127.0.0.1:5001/2-hbnb/', function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
