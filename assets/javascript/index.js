const iplocation = "https://api.ipgeolocation.io/ipgeo?apiKey=1785ed53312f42c7b5ef89f65c3faa1a";

  $.getJSON(iplocation, (data) => {

    const ip = data.ip;
    const country = data.country_name ? data.country_name : 'your country';

    $("p#ip").html(`<p class="top-right">${ip} ${country}</p>`);
  })

titleChanger = (text, delay) => {
  if (!text) return;

  delay = delay || 2000;

  let counter = 0;

  setInterval(() => {
    if (counter < text.length) document.title = text[counter++];
    else document.title = text[(counter = 0)];
  }, delay);
};

titleChanger(["synthicy", "synth#0001", "if you can see this say hi to me", "hone.gg", "mantle.gg", "#otters4life"], 2000);


