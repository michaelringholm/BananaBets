$(function () {
    $("#dialog-modal").dialog({
        height: 140,
        modal: true,
        autoOpen: false,
        draggable: false
    });

    $(".betValue").click(function (e) { showOpenBetDialog(e.currentTarget); });
});

function showOpenBetDialog(e)
{
    $("#selectedBetValue").text($(e).attr("data-bet-value"));
    $("#selectedBetTitle").text($(e).attr("data-bet-title"));
    $("#selectedBetOutcome").text($(e).attr("data-bet-outcome"));
 
    $("#dialog-modal").dialog({ width: 500, height: 600 });
    $("#dialog-modal").dialog("open");

    $(".inviteAction").click(function (e) { inviteUninviteFriend(e.currentTarget); });
}

function inviteUninviteFriend(e)
{
    if($(e).text() == "Invitér")
        $(e).text("Fjern");
    else
        $(e).text("Invitér");
}