// jquery
 $(function() {
  $('.btn-add').click(function() {
    var el = `
    <div class="note-single">
      <textarea placeholder="Your new note..."></textarea>
    </div>
    `
    $('.notes-container').append(el);

/* sistema para colocar a hora se preferir (não achei muito legal nesse formato);
    var textArea = $('.note-single').last().find('textarea');

    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();

    var finalTime = `${hh}:${mm}`;
    textArea.html(`New note: ${finalTime}`); */
  });
}); 