require('dotenv').config();
const { spawn } = require('child_process');

const link = process.env.RPTS_LINK;
const outputFile = `./record/vdo_record_${Math.floor(Math.random() * 100000)}.mp4`;

const ffmpegProcess = spawn('ffmpeg', [
    '-i', link,
    '-c:v', 'copy',  // คัดลอกวิดีโอโดยไม่เข้ารหัสใหม่
    '-c:a', 'aac',   // แปลงเสียงเป็น AAC
    '-b:a', '128k',  // กำหนด bitrate สำหรับเสียง (ปรับได้ตามต้องการ)
    '-t', '10', // อัด 10 วินาที
    outputFile
]);

ffmpegProcess.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

ffmpegProcess.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

ffmpegProcess.on('close', (code) => {
    console.log(`FFmpeg process exited with code ${code}`);
});
