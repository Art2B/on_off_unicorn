var Main = (function(my){
  my.initBtnEvents = function(){
    var buttons = document.querySelectorAll('button');
    for(var i=0; i< buttons.length; i++){
      buttons[i].addEventListener('click', function(event){
        var button = event.target;
        var req = new XMLHttpRequest();
        req.open('POST', '/'+button.dataset.action, false);
        req.send(null);
      });
    }
  };

  my.init = function(){
    my.initBtnEvents();
  };
  return my;
}(Main || {}));