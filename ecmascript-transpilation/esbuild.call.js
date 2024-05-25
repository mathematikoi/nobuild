import * as esbuild from 'esbuild'

await esbuild.build({
  entryPoints: ['source/code.js'],
  bundle: true,
  outfile: 'build/esbuild/code.js',
})