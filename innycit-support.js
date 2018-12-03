const emailUrl = 'mailto:support@innycit.com?subject=New%20Support%20Ticket%20-%20(Insert%20Description%20Here)&body=Phone:%20%0d%0dPlease%20describe%20the%20issue:%20'
const tipId = document.getElementById('it-tips-id');
const tipTitle = document.getElementById('it-tips-title');
const tipBody = document.getElementById('it-tips-body');
const shortcutsTable = `<div align="center"><table width="80%" align="center"><tbody><tr><td>&nbsp;</td><td><u>Mac</u></td><td><u>PC</u></td></tr><tr><td>Cut:</td><td>Cmd-X</td><td>Cntrl-X</td></tr><tr><td>Copy:</td><td>Cmd-C</td><td>Cntrl-C</td></tr><tr><td>Past:</td><td>Cmd-V</td><td>Cntrl-V</td></tr></tbody></table></div>`
const tips = [
  { id: 01, title: "When in Doubt, Restart It", body: "It's often overlooked, but sometimes the best first course of action is to power cycle the device in question." },
  { id: 02, title: "Cut, Copy, Paste Keyboard Shortcuts:", body: `Save time by using keyboard shortcuts<br><br>${shortcutsTable}` },
  // { id: 03, title: "title 03", body: "body 03" },
  // { id: 04, title: "title 04", body: "body 04" },
  // { id: 05, title: "title 05", body: "body 05" },
  // { id: 06, title: "title 06", body: "body 06" },
  // { id: 07, title: "title 07", body: "body 07" },
  // { id: 08, title: "title 08", body: "body 08" },
  // { id: 09, title: "title 09", body: "body 09" },
  // { id: 10, title: "title 10", body: "body 10" },
  // { id: 11, title: "title 11", body: "body 11" },
  // { id: 12, title: "title 12", body: "body 12" },
  // { id: 13, title: "title 13", body: "body 13" },
  // { id: 14, title: "title 14", body: "body 14" },
  // { id: 15, title: "title 15", body: "body 15" },
  // { id: 16, title: "title 16", body: "body 16" },
  // { id: 17, title: "title 17", body: "body 17" },
  // { id: 18, title: "title 18", body: "body 18" },
  // { id: 19, title: "title 19", body: "body 19" },
  // { id: 20, title: "title 20", body: "body 20" },
  // { id: 21, title: "title 21", body: "body 21" },
  // { id: 22, title: "title 22", body: "body 22" },
  // { id: 23, title: "title 23", body: "body 23" },
  // { id: 24, title: "title 24", body: "body 24" },
  // { id: 25, title: "title 25", body: "body 25" },
  // { id: 26, title: "title 26", body: "body 26" },
  // { id: 27, title: "title 27", body: "body 27" },
  // { id: 28, title: "title 28", body: "body 28" },
  // { id: 29, title: "title 29", body: "body 29" },
  // { id: 30, title: "title 30", body: "body 30" },
]



window.addEventListener('load', function () {
  let randomTipId = Math.floor(Math.random() * tips.length)

  tipId.innerHTML = `IN NYC IT Tech Tip # ${tips[randomTipId].id}`
  tipTitle.innerHTML = `${tips[randomTipId].title}`
  tipBody.innerHTML = `${tips[randomTipId].body}`
  console.log(randomTipId)
});


const button = document.getElementById('create-ticket')

button.addEventListener('click', function () {
  chrome.tabs.update({
    url: emailUrl
  });
})