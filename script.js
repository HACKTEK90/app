 function launchFullscreen() {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }

    // Trigger fullscreen on first tap/click anywhere
    document.addEventListener("click", function () {
      launchFullscreen();
    }, { once: true }); // Only trigger once
const output = document.getElementById('output');
const cursor = document.getElementById('input-cursor');

const lines = [
  'Initializing HackSim Terminal...',
  'Loading system modules ████████████████ 100%',
  'Scanning local memory banks...',
  'Memory OK [8 GB Detected]',
  'Establishing secure shell...',
  'Brute forcing passwords... ██████████████',
  'Access granted to 192.168.0.103',
  'Injecting payload...',
  'Payload deployed successfully.',
  'root@target:~$ ls',
  'documents  downloads  secrets.txt  sysconfig',
  'root@target:~$ cat secrets.txt',
  '*** CIA Backup Vault ***',
  'Code: XFR9-223A-BETA-1121',
  'Mission Files: [CLASSIFIED]',
  'root@target:~$ rm -rf / --no-preserve-root',
  'Deleting all system files...',
  '███▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ 12%',
  '███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ 99%',
  'System wiped.',
  'Terminal disconnected. Exiting...',
];

let index = 0;

function typeLine() {
  if (index < lines.length) {
    let line = lines[index];
    let typed = '';
    let i = 0;
    const interval = setInterval(() => {
      if (i < line.length) {
        typed += line[i++];
        output.innerHTML += typed[i - 1];
      } else {
        output.innerHTML += '\n';
        clearInterval(interval);
        index++;
        setTimeout(typeLine, 500);
      }
    }, 30);
  } else {
    cursor.style.display = 'none';
  }
}

window.onload = () => {
  typeLine();
};
