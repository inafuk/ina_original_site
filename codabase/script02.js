{/* <script> */}
   $(function(){
      $('#top-mein-list').mouseover(function(){
         //マウスオーバー時の処理を記載、複数記載することが可能
         $('#under').css('border','solid #ff92ad 5px');
         $('#under').css('color','#ff92ad');
      }).mouseout(function(){
         //マウスアウト時の処理を記載
         $('#under').css('border','solid #36d9d9 5px');
         $('#under').css('color','#36d9d9');
      });
   });
// </script>