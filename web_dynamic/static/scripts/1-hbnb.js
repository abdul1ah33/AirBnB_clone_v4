$(document).ready(function () {
  const amenitiesChecked = {};

  $('input[type="checkbox"]').change(function () {
    if (this.checked) {
      amenitiesChecked[$(this).data('id')] = $(this).data('name');
    } else {
      delete amenitiesChecked[$(this).data('id')];
    }

    const amenitiesList = Object.values(amenitiesChecked).join(', ');
    $('.amenities h4').text(amenitiesList);
  });
});

