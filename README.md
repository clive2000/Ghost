# Ghost with Cloudinary image upload plugin

Ghost With cloudinary image upload plugin using store module

Update to support changes after 0.10.0

Currently working on latest stable version of ghost (0.11.7)

# Developer Install (from git)

Install Node.js. (See [Supported Node.js versions](http://support.ghost.org/supported-node-versions/))

```bash
# Node v4.2+ LTS - recommended
# Node v0.10.x and v0.12.x - supported
#
# Choose wisely
```

Clone :ghost:

```bash
git clone git://github.com/tryghost/ghost.git
cd ghost
```

Install grunt. No prizes here.

```bash
npm install -g grunt-cli
```

Install Ghost. If you're running locally, use [master](https://github.com/TryGhost/Ghost/tree/master). For production, use [stable](https://github.com/TryGhost/Ghost/tree/stable). :no_entry_sign::rocket::microscope:

```bash
npm install
```

Build the things!

```bash
grunt init
```

Minify that shit for production?

```bash
grunt prod
```

Start your engines.

```bash
npm start

## running production? Add --production
```

Congrats! You made it. BTW you can also just `npm install ghost` if you're into that sort of thing. NPM aficionados can also read up on using [Ghost as an NPM module](https://github.com/TryGhost/Ghost/wiki/Using-Ghost-as-an-npm-module).

More general [install docs](http://support.ghost.org/installation/) here in case you got stuck.

# Config cloudinary-ghost 

Goto ./content/storage/cloudinary-ghost
```bash
npm install
```

In ./config.js, add your cloudinary credentials in test/development/production:
```JSON
storage: {
    active: 'cloudinary-ghost',
    'cloudinary-ghost': {
        cloud_name: 'CLOUD_NAME',
        api_key: 'YOUR API',
        api_secret: 'YOUR API SECRET'
    }
},
```

# Copyright & License

Copyright (c) 2013-2017 Ghost Foundation - Released under the [MIT license](LICENSE).
