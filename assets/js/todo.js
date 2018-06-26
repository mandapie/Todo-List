// strikethrough
$("ul").on("click", "li", function () {
    $(this).toggleClass("done");
});
// delete
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove(); //"this" is referring to "li" because parent was executed
    });
    event.stopPropagation();
});
// add
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var newTodo = $(this).val();
        $("ul").append("<li><span>x</span>" + newTodo + "</li>");
        $(this).val("");
    }
});