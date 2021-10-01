function GenerateHTML() {
    function SetClipboard(Str) {
        var TextArea = document.createElement("textarea");
        TextArea.value = Str;
        document.body.appendChild(TextArea);
        TextArea.select();
        document.execCommand("copy");
        document.body.removeChild(TextArea);
    };
    var Videos = document.getElementsByClassName("redeempointsmodal_VideoPreview_3_O3d")[0].children;
    var MP4 = Videos[1].attributes[0].value;
    var WEBM = Videos[0].attributes[0].value;

    SetClipboard(`<div class="no_header profile_page has_profile_background  full_width_background" style="">
    <div class="profile_animated_background">
    <video playsinline="" autoplay="" muted="" loop="" poster="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/items/504400/ac6891f4a16e9dfbdfef65dc5672b01cc1abf271.jpg">
    <source src="`+ WEBM +`" type="video/webm">
    <source src="` + MP4 + `" type="video/mp4">
    </video>
    </div>`);
};
GenerateHTML();
