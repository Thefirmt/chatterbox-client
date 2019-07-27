var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%= username %></div>
        <div><%= text %></div>
      </div>
    `)
};
/* <div><%= roomname %></div> */