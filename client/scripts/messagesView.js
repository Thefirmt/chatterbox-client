var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    FormView.$form.on('submit', MessagesView.render());
    $('#refresh').on('click', function(event){
      location.reload(true);
    })
  },

    // for (var i = 0; i < data.results.length; ++i) {
    //   $('#chats').append(MessageView.render());
    // }

  render: function() {
    Parse.readAll(data => {
      for (i = 0; i < data.results.length; i++) {
        if (data.results[i].username === undefined) {
          data.results[i].username = 'n/a';
        }
        if (data.results[i].text === undefined || data.results[i].text === '') {
          data.results[i].text = 'n/a';
        }
        $('#chats').append(filterXSS(MessageView.render(data.results[i])));
      }
    });
  },

  renderMessage: function(messages) {
    $('#chats').append(MessageView.render(messages));
  }
};