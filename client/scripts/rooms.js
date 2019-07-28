var Rooms = {
    add: function() {
        var newRoom = $('#roomname').val()
        RoomsView.$select.append(`<option>${newRoom}</option>`)
      }
};