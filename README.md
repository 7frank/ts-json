# overview

Goal:

- Define your json files in typescript instead.
- Have full type inference support & some tooling to build json files when you need them
- support json, yaml output

# scripts

- run `npm start` to generate typescript interfaces for schemas listed at ts.config.json

- run `tsx ./test/example.ts > example.json` to create json from ts on the fly (Note: this will be done automatically via the configuration)
- or `tsx ./test/traefik.yaml.ts  > ./test/traefik.yaml`
