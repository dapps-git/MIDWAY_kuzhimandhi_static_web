const ffmpegPath = require('ffmpeg-static');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('Using ffmpeg from:', ffmpegPath);

const inputFile = path.join(__dirname, '..', 'public', 'midway slowmo.mp4');
console.log('Input file:', inputFile, 'Exists:', fs.existsSync(inputFile));

// Check video info first
const ffprobe = spawn(ffmpegPath, ['-i', inputFile]);

let output = '';
ffprobe.stderr.on('data', (d) => { output += d.toString(); });
ffprobe.stdout.on('data', (d) => { output += d.toString(); });

ffprobe.on('close', () => {
  console.log('=== VIDEO INFO ===');
  const lines = output.split('\n');
  for (const line of lines) {
    if (line.includes('Duration') || line.includes('Stream #')) {
      console.log(line.trim());
    }
  }
});
