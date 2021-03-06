# Gameye SDK for Node.js

Create eSport and competitive matches for Counter-Strike: Global Offensive, Team Fortress 2, Left 4 Dead 2, Killing Floor 2, Insurgency and Day of Infamy for your platform without fixed monthly costs or any need for your own server infrastructure. Simply implement the Gameye API to kick off online matches when you need the, - you will even be able to implement the scores/statistics directly on your website. How cool is that!

## Node version
You neede node.js v10 or higher to use this library.

## Installation
You need an API key to use this SDK, to obtain a free Gameye API key, please send us [an email](mailto:support@gameye.com)

Then, install with
```
npm install @gameye/sdk
```

Typescript type declarations are automatically installed.

## Example!
Watch bots kill eachother and get aquinted qith our sdk and real-time statistics.

First, get an API key!
Then checkout this repo on your computer.
Install all dependencies with
```
npm install
```
Then, export your api key as an environment variable, like this
```
export GAMEYE_API_TOKEN=mysupersecretkey
```
And now, run
```
node ./node/examples/bots
```
to see bots kill eachother!


## Contributing
We encourage everyone to help us improve our public packages. If you want to
contribute please submit a [pull request](https://github.com/Gameye/gameye-sdk-node/pulls).

But, never commit something that breaks the build! You may prevent this a
little bit by linking the `test.sh` script as a git `pre-commit` hook!

like this:
```bash
ln test.sh .git/hooks/pre-commit
```

Now, just before every comit, your code will be compiled and linted!


## License
[BSD (Berkeley Software Distribution) License](https://opensource.org/licenses/bsd-license.php). 2017-2018 Gameye B.V.


## Support
Contact: [gameye.com](https://gameye.com) — support@gameye.com
