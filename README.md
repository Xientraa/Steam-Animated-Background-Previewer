# Steam Animated Background Previewer
A quick JavaScript program which allows you to test out different Animated backgrounds.

# How to use
Go to your Steam Profile on browser.
Open up inspect element by either Right Clicking or by Pressing F12 & navigate to Console
```
var Input = ``;

function ApplyHTML() {
    if (document.getElementsByClassName("profile_animated_background").length > 0) {
        var HTML = document.getElementsByClassName("responsive_page_template_content")[0].children[1].outerHTML;
        var SplittedHTML = HTML.split(`</div>`);
        document.getElementsByClassName("responsive_page_template_content")[0].children[1].outerHTML = HTML.replace(SplittedHTML[0]+`</div>`, Input);
    }
    else {
        var HTML = document.getElementsByClassName("responsive_page_template_content")[0].children[1].outerHTML;
        var SplittedHTML = HTML.split(`' );">`);
        document.getElementsByClassName("responsive_page_template_content")[0].children[1].outerHTML = HTML.replace(SplittedHTML[0]+`' );">`, Input);
    }
};
ApplyHTML();
```
Copy & paste into the console.

Go to the [Steam Points Store](https://store.steampowered.com/points/shop) in a seperate tab & find an animated background that you want to preview & click on it.
Open up inspect element by either Right Clicking or by Pressing F12 & navigate to Console
```
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
```
Copy & paste into the console then hit Enter.

Head back over to your profile, where it says " Input = `` " Paste between the `` by Right click > Paste or by pressing CTRL - V
Have fun!

I hope this guide was good enough, I'm very sleep deprived at the moment.
