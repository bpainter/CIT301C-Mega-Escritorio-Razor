$(document).ready(function() {
    $(".material").change(function () {
        var material = "";
        $(".img-container ").removeClass("selected-border");
        material = $(".material option:selected").val();
        $("." + material).parent().addClass("selected-border");
    });
    
    $(".img-container").click(function () {
        $(".material").find('option:selected').removeAttr("selected");
        var newValue = "";
        $(".img-container ").removeClass("selected-border");
        $(this).addClass("selected-border");
        newValue = $(this).find('img:first').attr("class")
        $(".material").find('option[value="' + newValue + '"]').attr("selected", true);
    });
});