$(document).ready(function () {
    console.log("ready!");



    function toggleWabern() {
        $("#wabern").toggleClass("show", 1000);
        $("#buttonWabern").toggleClass("redInvert");
    }

    function toggleIrgendwo() {
        $("#irgendwo").toggleClass("show", 1000);
        $("#buttonIrgendwo").toggleClass("blueInvert");
    }


    function toggleUeberunsBox() {
        $("#ueberUnsBox").toggleClass("show", 1000);
        $("#ueberUnsBt").toggleClass("whiteInvert");
    }

    function Scrolltouebersicht() {
        $("html, body").animate({
            scrollTop: 780
        }, 500);
    }

    function Scrolltop() {
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    }
    //Funktionniert nicht, weil seite dann keine Höhe mehr hat


    $("#buttonIrgendwo").on('click', function () {
        if (!$('#wabern').hasClass('show') && !$('#irgendwo').hasClass('show') && !$('#ueberUnsBox').hasClass('show')) {
            toggleIrgendwo();
            Scrolltouebersicht();
        } else if ($('#wabern').hasClass('show')) {
            toggleIrgendwo();
            toggleWabern();
            Scrolltouebersicht();

        } else if ($('#irgendwo').hasClass('show')) {
            toggleIrgendwo();
            Scrolltop();
        } else {
            toggleUeberunsBox();
            toggleIrgendwo();
            Scrolltouebersicht();

        }
    });

    $("#buttonWabern").on('click', function () {
        if (!$('#wabern').hasClass('show') && !$('#irgendwo').hasClass('show') && !$('#ueberUnsBox').hasClass('show')) {
            toggleWabern();
            Scrolltouebersicht();

        } else if ($('#wabern').hasClass('show')) {
            toggleWabern();
            Scrolltop();
        } else if ($('#irgendwo').hasClass('show')) {
            toggleIrgendwo();
            toggleWabern();
            Scrolltouebersicht();

        } else {
            toggleWabern();
            toggleUeberunsBox();
            Scrolltouebersicht();

        }
    });

    $("#ueberUnsBt").on('click', function () {
        if (!$('#wabern').hasClass('show') && !$('#irgendwo').hasClass('show') && !$('#ueberUnsBox').hasClass('show')) {
            toggleUeberunsBox();
            Scrolltouebersicht();

        } else if ($('#wabern').hasClass('show')) {
            toggleWabern();
            toggleUeberunsBox();
            Scrolltouebersicht();

        } else if ($('#irgendwo').hasClass('show')) {
            toggleIrgendwo();
            toggleUeberunsBox();
            Scrolltouebersicht();

        } else {
            toggleUeberunsBox();
            Scrolltop();

        }
    });

    //    Ablaufknöpfe togglen

    //    Ablaufknöpfe Irgendwo Tipp

    $("#tippBt").click(function () {
        $("#tippOne").fadeIn(500, "linear");

    });

    $("button").click(function () {
        $("#tippOne").fadeOut(500, "linear");

    });

    $(document).mouseup(function (e) {
        var popup = $("#tippOne");
        if (!$('#tippBt').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
            popup.fadeOut(500);
        }
    });


    //    Ablaufknöpfe Systembutton

    $("#SysBt").click(function () {
        $("#SysEinst").fadeIn(500, "linear");

    });

    $("button").click(function () {
        $("#SysEinst").fadeOut(500, "linear");

    });

    $(document).mouseup(function (e) {
        var popup = $("#SysEinst");
        if (!$('#SysBt').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
            popup.fadeOut(500);
        }
    });

    //    Ablaufknöpfe Kopfhörer

    $("#KopfhBt").click(function () {
        $("#KopfH").fadeIn(500, "linear");

    });

    $("button").click(function () {
        $("#KopfH").fadeOut(500, "linear");

    });

    $(document).mouseup(function (e) {
        var popup = $("#KopfH");
        if (!$('#KopfhBt').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
            popup.fadeOut(500);
        }
    });
    
    //    Ablaufknöpfe Irgendwo Symbolleiste

        $("#SymblIrgendwoBt").click(function () {
        $("#SymbolleisteIrgendwo").fadeIn(500, "linear");

    });

    $("button").click(function () {
        $("#SymbolleisteIrgendwo").fadeOut(500, "linear");

    });

    $(document).mouseup(function (e) {
        var popup = $("#SymbolleisteIrgendwo");
        if (!$('#SymblIrgendwoBt').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
            popup.fadeOut(500);
        }
    });

        //    Ablaufknöpfe Wabern Symbolleiste

        $("#SymblWabernBt").click(function () {
        $("#SymbolleisteWabern").fadeIn(500, "linear");

    });

    $("button").click(function () {
        $("#SymbolleisteWabern").fadeOut(500, "linear");

    });

    $(document).mouseup(function (e) {
        var popup = $("#SymbolleisteWabern");
        if (!$('#SymblWabernBt').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
            popup.fadeOut(500);
        }
    });


    //    Ablaufknöpfe Fahrplan

    $("#FahrplanBt").click(function () {
        $("#Fahrplan").fadeIn(500, "linear");

    });

    $("button").click(function () {
        $("#Fahrplan").fadeOut(500, "linear");

    });

    $(document).mouseup(function (e) {
        var popup = $("#Fahrplan");
        if (!$('#FahrplanBt').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
            popup.fadeOut(500);
        }
    });

    //    Ablaufknöpfe Kopfhörer irgendwo

    $("#KopfhIrgendwoBt").click(function () {
        $("#KopfhIrendwo").fadeIn(500, "linear");

    });

    $("button").click(function () {
        $("#KopfhIrendwo").fadeOut(500, "linear");

    });

    $(document).mouseup(function (e) {
        var popup = $("#KopfhIrendwo");
        if (!$('#KopfhIrgendwoBt').is(e.target) && !popup.is(e.target) && popup.has(e.target).length == 0) {
            popup.fadeOut(500);
        }
    });



});
