var socket = io();

$('form').submit(function () {
    var ini = $('#initials').val();
        text = $('#message').val();
    
    socket.emit('initials', ini);
    socket.emit('message', text);
    $('#initials').val('');
    $('#message').val('');
    return false;
});

socket.on(
//    'initials' + 
          'message', function (msg) {
    $('<li>').text(msg).appendTo('#history');
});