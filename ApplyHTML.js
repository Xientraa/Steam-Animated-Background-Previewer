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
