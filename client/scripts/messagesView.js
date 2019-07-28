var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    FormView.$form.on('submit', MessagesView.render());
    $('#refresh').on('click', function(event){
      location.reload(true);
    });


  },

  renderChatroom: function() {
    MessagesView.$chats.html('');
    var chatroom = $('#room-selector option:selected').text()
    Parse.readAll(data => {
      for (i = 0; i < data.results.length; i++) {
        if (data.results[i].username === undefined) {
          data.results[i].username = 'n/a';
        }
        if (data.results[i].text === undefined || data.results[i].text === '') {
          data.results[i].text = 'n/a';
        }
        if(data.results[i].roomname === chatroom)
        $('#chats').append(MessageView.render(data.results[i])); //filterXSS the messageview
      }
    });
    Friends.toggleStatus();
  },

  render: function() {
    Parse.readAll(data => {
      for (i = 0; i < data.results.length; i++) {
        if (data.results[i].username === undefined) {
          data.results[i].username = 'n/a';
        }
        if (data.results[i].text === undefined || data.results[i].text === '') {
          data.results[i].text = 'n/a';
        }
        $('#chats').append(MessageView.render(data.results[i])); //filterXSS the messageview
      }
    });
      Friends.toggleStatus();
  },

  renderMessage: function(messages) {
    $('#chats').append(MessageView.render(messages));
  }
};

