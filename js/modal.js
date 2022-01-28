$(document).ready(function(){

  var modalButton = $('.booking-button__view');
  var closeModalButton = $('.modal-close');

  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
  
  function openModal() {
    var modal = $('.modal');
    modal.addClass('modal-visible');
  }

  function closeModal() {
    var modal = $('.modal');
    modal.removeClass('modal-visible');
  }

  
  $(document).on('keydown', function(e) {
    if (e.keyCode == 27){
      closeModal()
    }
  });





});