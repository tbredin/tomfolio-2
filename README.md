# TomFolio2: using Vite create with Lit3

This is the project you get when you run `npm create vite@latest`.

I followed the setup guide here: https://vite.dev/guide/

Currently need to run nvm use 20 when I open a new terminal (likely can be solved by adding something to bash profile? But I'm lazy..)

## Dev

To develop, run

`npm run dev`

## Deployment

Tomfolio2 is hosted on a Digital Ocean droplet

To deploy, first run

`npm run build`

and then

`rsync -r ssh ./dist/ tom@128.199.84.188://var/www/thomasbredingrey.com/html/`

You will need to enter your password (hint: traitor to the dragons)
