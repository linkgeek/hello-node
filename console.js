// console.log(process.env);
//console.log(process.argv);

const os = require("os");

// 操作系统 CPU 架构
console.log('arch : ' + os.arch());

// CPU
console.log('cpu : ' + JSON.stringify(os.cpus()));

// CPU 核数
console.log('cpu 核数 : ' + os.cpus().length);

// CPU 的字节序
console.log('endianness : ' + os.endianness());

// 操作系统名
console.log('type : ' + os.type());

// 操作系统名
console.log('platform : ' + os.platform());

// 系统内存总量
console.log('total memory : ' + os.totalmem() + " bytes.");
console.log('total memory : ' + os.totalmem()/1024/1024/1024 + " GB.");

// 操作系统空闲内存量
console.log('free memory : ' + os.freemem() + " bytes.");