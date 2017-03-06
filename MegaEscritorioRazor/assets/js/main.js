$(document).ready(function () {
    if ($(".material").length) {
        // Get the value of the material dropdown when the page loads
        materialDropdownValue = $(".material").val();

        // Set the correct square of the material image when the page loads 
        $('.img-container').find("." + materialDropdownValue).addClass("selected-border");


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
            var newValue = "";
            $(".img-container ").removeClass("selected-border");
            $(this).addClass("selected-border");
            newValue = $(this).find('img:first').attr("class")
            $(".material").find('option[value="' + newValue + '"]').attr("selected", true);
        });
    }
});