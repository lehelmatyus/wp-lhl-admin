(function ($) {
	"use strict";

	$(function () {});
})(jQuery);

function lbrtyLicenseBoxToggle(e, element) {
	e.preventDefault();
	jQuery(".lbrty-license-box").toggleClass("open");
}

function lbrtyLicenseBoxActivateKey(e) {
	e.preventDefault();
	let id = e.target.id;
	let btn = e.target;
	let lbrtyBox = document.querySelector(".lbrty-license-box");
	let msg = document.querySelector("." + id + "__msg");
	let userId = btn.dataset.userId;

	console.log(msg.dataset);

	jQuery
		.ajax({
			url:
				LbrtyBoxApiSettings.root + LbrtyBoxApiSettings.ActivateKeyApiEndpoint,
			type: "POST",
			contentType: "application/json",
			beforeSend: function (xhr) {
				xhr.setRequestHeader("X-WP-Nonce", LbrtyBoxApiSettings.lbrty_nonce);
				btn.disabled = true;
				msg.innerHTML = msg.dataset.waitmsg;
				lbrtyBox.classList.add("working");
			},
			data: JSON.stringify({
				userId: userId,
			}),
			success: function (response) {},
		})
		.done(function (results) {
			console.log(results);

			btn.disabled = false;
			msg.innerHTML = msg.dataset.successMsg;
		})
		.fail(function (jqXHR, textStatus, errorThrown) {
			console.log(jqXHR);
			console.log(textStatus);
			console.log(errorThrown);

			lbrtyBox.classList.remove("working");
			btn.disabled = false;
			msg.innerHTML =
				"Script Failed. Error: " +
				errorThrown +
				" " +
				jqXHR.responseJSON.message;
		});
}

function lbrtyLicenseBoxDeactivateKey(e) {}
