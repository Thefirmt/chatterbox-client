var Friends = {
  // $('#chats').find('.username').trigger('click')
  toggleStatus: function() {
    $('.chat .username').on('click', function(){
      $(this).css('color', 'red');
      console.log("test")
      // $('.username').css('color', red);
    })
  }

};