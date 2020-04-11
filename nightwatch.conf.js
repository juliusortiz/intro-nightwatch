module.exports = {
    src_folders: ["tests"],

    webdriver: {
        start_process: true,
        server_path: "node_modules/.bin/chromedriver.exe",
        port: 9515,
    },

    test_settings: {
        default: {
            launch_url: 'https://www.dice205.com/',
            desiredCapabilities: {
                browserName: "chrome",
                javascriptEnabled: true,
                chromeOptions: {
                    args: [
                        "start-maximized",
                        //"--headless",
                        //"--verbose",
                        //"--disable-gpu=true",
                    ],
                },
            },
        },
    },
};