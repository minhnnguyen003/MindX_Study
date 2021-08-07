import CardInfo from "./Components/CardInfo.js";

$(document).ready(() => {
  // call api

  const callAPI = async (username, resolveCallAPI, rejectCallAPI) => {
    try {
      const call = await fetch(`https://api.github.com/users/${username}`);
      if(call.ok) {
        call.json().then(result => resolveCallAPI(result));
      }
      else {
        rejectCallAPI(new Error("Không tìm thấy user yêu cầu!"));
      }
    } 
    catch (error) {
        rejectCallAPI(new Error(error));
    }
  };

  // resolve promise

  const resolveCallAPI = (res) => {
    const userCard = new CardInfo(
      res.name ? res.name : "Not have",
      res.avatar_url
        ? res.avatar_url
        : "https://i0.wp.com/s1.uphinh.org/2021/05/31/default-profile-icon-26-2.jpg",
      res.email ? res.email : "Not have",
      res.company ? res.company : "Not have",
      res.followers ? res.followers : "Not have"
    );
    $(".app-result").html(userCard.show());
    stopCallAPI();
  };

  const rejectCallAPI = (error) => {
    $(".app-result").html(`<h5 class="text-center text-danger">${error}</h5>`);
    stopCallAPI();
  };

  // start call API

  const startCallAPI = () => {
    $(".fa-arrow-right").hide();
    $(".spinner-border").show();
    $("#btn-getInfo").addClass("disabled");
  };

  // stop call API

  const stopCallAPI = () => {
    $(".fa-arrow-right").show();
    $(".spinner-border").hide();
    $("#btn-getInfo").removeClass("disabled");
    $("#username").val("");
  };

  // get user info

  const getUserInformation = () => {
    const user = $("#username").val();
    user === "" ? $(".app-result").html(`<h5 class="text-center text-danger">Hãy nhập user muốn tìm</h5>`)
      : (startCallAPI(), callAPI(user, resolveCallAPI, rejectCallAPI));
  };

  $("#btn-getInfo").click(getUserInformation);
});
