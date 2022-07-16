
  function initNiceSrcoll(){
    $('.nice-scroll').niceScroll(".nice-scroll-con",{
      cursorcolor:'black',
      cursorwidth:'5px',
      autohidemode:'scroll',
      cursorborder:'1px solid #3e444e'
    });
  }
  function resizeNiceSrcoll(){
    $(this).getNiceScroll().resize();
  }

