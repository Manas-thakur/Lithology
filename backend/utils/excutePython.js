const { spawn } = require("child_process");
require("colors");

const executePython = async (script, args) => {
    if (!script || !Array.isArray(args)) {
        throw new Error('Invalid arguments provided to executePython');
    }

    try {
        const arguments = args.map(arg => 
            arg === null || arg === undefined ? '' : arg.toString()
        );
        
        const py = spawn("python", [script, ...arguments]);
        
        const result = await new Promise((resolve, reject) => {
            let output = "";
            let errorOutput = "";

            py.stdout.on('data', (data) => {
                output += data;
            });

            py.stderr.on("data", (data) => {
                errorOutput += data;
                console.error(`[Python Error] ${data}`.red);
            });

            py.on("error", (error) => {
                console.error(`Failed to start Python process: ${error}`.red);
                reject(new Error(`Failed to execute ${script}: ${error.message}`));
            });

            py.on("exit", (code) => {
                console.log(`Python process exited with code ${code}`);
                if (code === 0) {
                    console.log(`Python Script executed successfully`.green);
                    resolve(output.trim());
                } else {
                    reject(new Error(`Python script failed with code ${code}\n${errorOutput}`));
                }
            });
        });

        return result;
    } catch (error) {
        console.error(`ExecutePython Error: ${error.message}`.red);
        throw error;
    }
}

module.exports = executePython;

