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

    Parse.readAll(data => {
      var roomArr = []
      for (let i = 0; i < data.results.length; i++) {
        if (data.results[i].roomname === null || data.results[i].roomname === undefined || data.results[i].roomname === '') {
          data.results[i].roomname = 'Lobby234';
        }
        // let roomList = document.body.childNodes[1].childNodes[5].childNodes[1].childNodes;
        roomArr.push(data.results[i].roomname);
      }
      var filteredArr = _.uniq(roomArr);
        for (let j = 0; j < filteredArr.length; j++) {
          RoomsView.$select.append(`<option>${filteredArr[j]}</option>`);
        }
    });
  },


  renderRoom: function() {
    RoomsView.render();
  }
};
