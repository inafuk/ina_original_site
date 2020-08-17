// $(function(). {
    $('#under-line > li').hover(
        function() {
            $(this).css('border-bottom', 'solid white 2px');
        },
        function() {
            $(this).css('border-bottom', 'none');
        });
// });

$('#under-line > li').hover(
    function() {
        $(this).css("opacity", "0.5");
    },
    function() {
        $(this).css("opacity", "1");
    });
