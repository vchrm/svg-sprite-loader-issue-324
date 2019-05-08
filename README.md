# svg-sprite-loader issue #324 example

An example to demonstrate the following issue:
https://github.com/kisenka/svg-sprite-loader/issues/324

## How to install and build
```
$ yarn
$ yarn build
```

## What is wrong?
After compilation the `dist/main.css` file contains the following:
```
.logo {
	background: url([object Module]);
}
```

The `[object Module]` part does not feel so right.
