function callMe() {
    window.location.href = 'tel:+91 8962666823';
}
function whatsappMe() {
    var whatsappNumber = "+917974603337"; // Replace with the actual WhatsApp number

    // Construct the WhatsApp URL
    var whatsappUrl =
        "https://wa.me/" + whatsappNumber + "?text=" + "Jai shree ram";

    // Open the WhatsApp URL in a new tab
    window.open(whatsappUrl, "_blank");
        }