// $('.box').load({
//   'load': () => {
//     console.log('loadイベントが発生しました');
//     // $('.box').text('loadイベントが発生しました');
//   }
// });




$(function() {

  $(window).on({
    'scroll': () => {
      console.log('scrollイベントが発生しました');
    }
  });

});