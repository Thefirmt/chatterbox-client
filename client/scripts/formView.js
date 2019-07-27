var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var msg = {
    //obtain username from page load
    // username: window.location.search.substr(10),
    username: App.username,
    //obtain val() from form
    text: $('#message').val(),
    //eventually obtain room
    roomname: $('#room-select').val()
    }
    Parse.create(msg, ()=>{
      $('#chats').append(MessageView.render(msg))
    });
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },
};