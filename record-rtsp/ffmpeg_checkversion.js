const { exec } = require('child_process');
const { stdout, stderr } = require('process');

function ffmpeg_v() {
    exec('ffmpeg -version', (err, stdout, stderr) => {
        if (err) {
            console.log(`ffmpeg not regonize. ${err.message}`);
            return
        }
        console.log(`FFmpeg version : ${stdout}`);

    })
}

module.exports = { ffmpeg_v };