var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
      RoomsView.$button.on('click', function() {
        RoomsView.render();
    })
  },

  render: function() {
    var newRoom = $('#roomname').val()
    RoomsView.$select.append(`<option>${newRoom}</option>`)
  },

  renderRoom: function() {
    RoomsView.render();
  }
};
