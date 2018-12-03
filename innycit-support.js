const emailUrl = 'mailto:support@innycit.com?subject=New%20Support%20Ticket%20-%20(Insert%20Description%20Here)&body=Phone:%20%0d%0dPlease%20describe%20the%20issue:%20'
const tipId = document.getElementById('it-tips-id');
const tipTitle = document.getElementById('it-tips-title');
const tipBody = document.getElementById('it-tips-body');
const button = document.getElementById('create-ticket')

const shortcutsTable = `<div align="center"><table width="80%" align="center"><tbody><tr><td>&nbsp;</td><td><u>Mac</u></td><td><u>PC</u></td></tr><tr><td>Cut:</td><td>Cmd-X</td><td>Cntrl-X</td></tr><tr><td>Copy:</td><td>Cmd-C</td><td>Cntrl-C</td></tr><tr><td>Past:</td><td>Cmd-V</td><td>Cntrl-V</td></tr></tbody></table></div>`
const tips = [
  { id: 01, title: "When in Doubt, Restart It", body: "It's often overlooked, but sometimes the best first course of action is to power cycle the device in question." },
  { id: 02, title: "Cut, Copy, Paste Keyboard Shortcuts:", body: `Save time by using keyboard shortcuts<br><br>${shortcutsTable}` },
  { id: 03, title: "Protect Your Accounts with Strong Passwords", body: "Make sure you always create new passwords with both upper and lower-case letters, numbers, and special characters. Also make sure you don't use the same password for multiple accounts. If a hacker gets one of your passwords, they will immediately try it everywhere." },
  { id: 04, title: "Shut Your Computer Down Often", body: "Many common computer issues are a direct result of leaving your computer on too long. Shutting your computer down at least once a week is a great way to prevent problems." },
  { id: 05, title: "Check Your Internet Speed", body: `Websites like <a target="_blank" href="http://speakeasy.net"><u>speakeasy.net</u></a> and <a target="_blank" href="http://speedtest.net"><u>speedtest.net</u></a> allow you to check your internet speed to make sure your network is functioning properly.` },
  { id: 06, title: "Don't Click on Suspicious Links", body: "If you're not sure, play it safe! Your can always forward any suspicious sites and emails to support@INNYCIT.com and we will investigate on your behalf." },
  { id: 07, title: "We're Here to Help", body: "If you have a small issue you think you can resolve, great! However, it is recommended to avoid trying to address any issues you aren't comfortable with. When in doubt, let IN NYC IT be your tech super-hero." },
  { id: 08, title: "Make Websites Easier to Read", body: "If you're finding the text on a website too big or too small, you can press Cmd-+/- (Mac) or Cntrl-+/- (PC) to increase and decrease the font size in your web browser." },
  { id: 09, title: "Re-Open a Closed Browser Tab ", body: "Have you ever accidentally closed a browser tab before you are done?<br>All is not lost! If you press Cmd-Shift-Tab (Mac) or Cntrl-Shift-Tab (PC) you can re-open the last tab you've closed." },
  { id: 10, title: "Always Backup Your Files", body: "Services like G-Drive and Dropbox have native applications that automatically upload your files to the cloud. You should always save your work into the G-Drive or Dropbox folders if you have them. Any files on your desktop won't automatically backup. If you're not using one of these services, you may want to invest in an external hard-drive to peridoically backup your work." },
  { id: 11, title: "Password Protect Your Wireless Network", body: "If your wireless network doesn't have a password, you are vulnerable to a host of serious cyber-threats. In a place as congested as NYC, you should never, ever have an unprotected wireless network." },
  { id: 12, title: "Empty Your Downloads Folder", body: "Many people don't realize how many old files they have collecting dust in their downloads folder. Periodically emptying your downloads folder can save Gigabytes of storage space, especially if you haven't checked in a while." },
  { id: 14, title: "Cmd-F (Mac) / Cntrl-F (PC)", body: `If you are looking for a specific keyword on a website, spreadsheet, Word document, or PDF you can use the built-in "Find" feature.<br>Pressing Cmd-F (Mac) or Cntrl-F (PC) will open a small window where you can type a keyword. The application will then highlight all instances of that keyword making your life much, much easier. ` },
  { id: 15, title: "Search Google with a Right-Click", body: `While browsing the web, you can right-click on any word or selected text and click "Search Google". This will work in Safari, Chrome, and Firefox.` },
]

window.addEventListener('load', function () {
  let randomTipId = Math.floor(Math.random() * tips.length)

  tipId.innerHTML = `IN NYC IT Tech Tip # ${tips[randomTipId].id}`
  tipTitle.innerHTML = `${tips[randomTipId].title}`
  tipBody.innerHTML = `${tips[randomTipId].body}`
  console.log(randomTipId)
});

button.addEventListener('click', function () {
  chrome.tabs.update({
    url: emailUrl
  });
})