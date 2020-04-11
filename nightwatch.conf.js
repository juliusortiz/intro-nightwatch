module.exports = {
    src_folders: ["dice205-website"],

    webdriver: {
        start_process: true,
        server_path: "node_modules/.bin/chromedriver.exe",
        port: 9515,
    },

    test_settings: {
        default: {
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