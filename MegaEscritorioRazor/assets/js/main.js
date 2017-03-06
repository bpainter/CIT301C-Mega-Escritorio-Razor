$(document).ready(function () {
    if ($(".material").length) {
        // Get the value of the material dropdown when the page loads
        var materialDropdownValue = $(".material").val();

        // Set the correct square of the material image when the page loads 
        $('.img-container').find("." + materialDropdownValue).parent().addClass("selected-border");


        // Change the image container when selecting a material from the dropdown
        $(".material").change(function () {
            var material = "";
            $(".img-container ").removeClass("selected-border");
            material = $(".material option:selected").val();
            $("." + material).parent().addClass("selected-border");
        });

        // Change the material dropdown based on the material square
        $(".img-container").click(function () {
            $(".material").find('option:selected').removeAttr("selected");
            $(".img-container ").removeClass("selected-border");
            $(this).addClass("selected-border");
            var newValue = $(this).find('img').attr("class");
            $(".material").find('option[value="' + newValue + '"]').attr("selected", true);
        });
    }
});