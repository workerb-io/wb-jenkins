
const path = require('path')
const helpers = require('./webpack.helpers.js');
const WBMetaJsonGenerator = require("wb-packager-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const fileSystem = helpers.generateFS(__dirname + '/src/actions', "workerB")

const entryFiles = helpers.generateEntryPaths(fileSystem.children);

const mode = process.argv.filter(val => val.includes("--mode"));
let environment = "production";
if(mode.length > 0 && mode[0].includes("dev")) {
  environment = "development";
}

const entryPaths = helpers.getFiles(entryFiles, ".ts").map(file => file.replace('.ts', ''));


const folderDescriptionList = [
  {
    path: "/jobs",
    description: "Display all Jenkins jobs",
    iconPath: "src/actions/jobs/job_icons/job.png",
    defaultAction: "open"
  },
  {
    path: "/users",
    description: "Display all Jenkins Users",
    iconPath: "src/actions/users/user_icons/users.png",
    defaultAction: "open"
  },
  {
    path: "/jobs/option/builds",
    description: "Display all Jenkins Job Builds",
    iconPath: "src/actions/jobs/option/builds/build_icons/disabled.png",
    defaultAction: "open"
  }
]

module.exports = {
    entry: entryPaths.reduce((result, entryPath) => {
        result[entryPath] = "./src/actions/" + entryPath + ".ts"
        return result;
    }, {}),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        globalObject: 'this',
        libraryTarget: 'umd',
        library: 'main',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ["@babel/preset-env"]
                  }
                }
            }
        ]
    },
    plugins: [
        new WBMetaJsonGenerator({
            environment,
            package: "Jenkins",
            packageDescription: "Jenkins CI",
            packageIcon: "",
            readmeFile: 'README.md',
            sites: ["https://www.jenkins.io"],
            folderDescriptionList
        })
    ],
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          uglifyOptions: {
            output: {
              comments: /(@description|@name|@ignore)/i,
            },
          },
        }),
      ],
    }
}