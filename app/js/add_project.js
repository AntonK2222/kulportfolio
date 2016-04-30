var myModule = (function() {
    
    var init = function(){
        _setUpListners();
    };
    
    var _setUpListners = function() {
      $('#work-previewblock-addnew').on('click', _showModal);// открыть модальное окно
    };
    
    var _showModal = function () {
       console.log('Вызов модального окна'); 
        };
    return {
        init: init
     }; 
})();

myModule.init();