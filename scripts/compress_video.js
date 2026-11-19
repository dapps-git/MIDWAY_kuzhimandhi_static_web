const ffmpegPath = require('ffmpeg-static');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const input = path.join(__dirname, '..', 'public', 'midway slowmo.mp4');
const outputDir = path.join(__dirname, '..', 'public', 'videos');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
const output = path.join(outputDir, 'savour-video.mp4');
const posterOutput = path.join(__dirname, '..', 'public', 'images', 'savour-poster.jpg');

console.log('Starting compression...');
console.log('Input:', input);
console.log('Output:', output);

// First: Extract a high-res poster frame at 5 seconds
const posterArgs = [
  '-ss', '00:00:05',
  '-i', input,
  '-frames:v', '1',
  '-q:v', '2',
  '-vf', 'scale=1920:-2',
  '-y', posterOutput
];

const posterProcess = spawn(ffmpegPath, posterArgs);
posterProcess.on('close', (code) => {
  console.log('Poster frame generated at:', posterOutput, 'code:', code);
  startMainCompression();
});

function startMainCompression() {
  // Compress to web-optimized 1080p, 60fps, high quality CRF 21, faststart
  const args = [
    '-i', input,
    '-vf', 'scale=1920:-2',
    '-r', '60',
    '-c:v', 'libx264',
    '-preset', 'medium',
    '-crf', '21',
    '-c:a', 'aac',
    '-b:a', '128k',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    '-y', output
  ];

  const startTime = Date.now();
  const proc = spawn(ffmpegPath, args);

  proc.stderr.on('data', (data) => {
    const text = data.toString();
    // Log progress line
    const match = text.match(/time=(\d{2}:\d{2}:\d{2}\.\d{2})/);
    if (match) {
      process.stdout.write(`\rProgress: time=${match[1]}`);
    }
  });

  proc.on('close', (code) => {
    console.log('\nCompression finished with code:', code);
    const elapsed = Math.round((Date.now() - startTime) / 1000);
    console.log(`Elapsed time: ${elapsed}s`);
    if (fs.existsSync(output)) {
      const stats = fs.statSync(output);
      console.log(`Output size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
    }
  });
}

