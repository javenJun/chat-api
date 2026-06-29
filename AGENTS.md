# AGENTS.md

## Cursor Cloud specific instructions

`chat-api` is an [Egg.js](https://www.eggjs.org/) (v2.x) + TypeScript backend for a chat room.
It exposes a single HTTP API service and uses `egg-sequelize` to talk to MySQL.

Standard commands live in `package.json` `scripts` and `README.md`; the notes below
only cover non-obvious caveats for this 2019-era project.

### Node version (important)
- Use **Node 14** (`v14.21.3`, installed via nvm). This is already the default and is
  pinned ahead of `/exec-daemon/node` (v22) via a `PATH` line in `~/.bashrc`, so a fresh
  shell already runs Node 14 — verify with `node -v`.
- Do **not** run the app/tests under Node 22+: `fast-glob@2` throws
  `ENOENT ... scandir '/workspace/app/extend'` while loading optional Egg dirs, so the
  server/tests fail to boot.
- Node 12 is also too old: some installed transitive deps use optional chaining (`?.`).

### Dependencies
- Refresh deps with **`npm ci`** (uses npm 6 from Node 14), which is what the startup
  update script runs. This preserves the committed `package-lock.json` (lockfileVersion 1).
- Do **not** run `npm install` under Node 22 / npm 10 — it rewrites `package-lock.json`
  to newer, incompatible versions and breaks the boot described above.
- `egg-ci` runs a postinstall that regenerates `.travis.yml` / `appveyor.yml`; under
  Node 14 + the committed lockfile the output matches what's checked in, so there is no diff.

### Database (must be started each session; not in the update script)
- MariaDB (MySQL-compatible) is installed but there is **no systemd**. Start it manually:
  `sudo mariadbd-safe --user=mysql &` (or run it in a tmux session).
- Connection settings are hardcoded in `config/config.default.ts`:
  host `localhost`, port `3306`, user `root`, password `yujiajun1234`, database `javen`.
- The `javen` database and the `root` password are already configured in the VM snapshot.
  `root` uses password auth, so `sudo mariadb` (socket login) needs `-p` with that password,
  e.g. `mysql -h 127.0.0.1 -u root -pyujiajun1234 javen`.
- The home route (`GET /`) does not touch the DB, but `egg-sequelize` connects at boot, so
  MariaDB must be running before `npm run dev` / tests.

### Run / test / lint
- Dev server: `npm run dev` → http://127.0.0.1:7001 (Egg's default port; the `4000` in
  README is outdated). `GET /` returns `hi, egg`.
- Tests: `npm run test-local` (egg-bin/mocha). `npm test` runs `lint --fix` then the tests.
- Lint: `npm run lint` (tslint). Type-check: `npm run tsc`.
- tsc caveat (also in README): do not run `npm run tsc` before `npm run dev` — it emits
  `.js` files next to the `.ts` sources. If you did, run `npm run clean` first.
