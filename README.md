# Security notes
## Database
Install DBeaver to connect to variety of DBs https://dbeaver.io

Use docker-compose to start Postgres accessible at 0.0.0.0:5432
```bash
# start docker compose in detached mode
docker-compose up -d
```

Alternatively you can run a postgres image directly with the following docker command
```bash
# Create a container called pgdb from the postgres:latest docker image (downloads if its not available), and exposes the port 5432 to the host machine.
docker run -p 5432:5432 --name pgdb -e POSTGRES_PASSWORD=password -e PGDATA=/var/lib/postgresql/data/pgdata -d postgres
# Stop the container with
docker container stop pgdb
# Delete the container with
docker container rm pgdb
# Connect to the Postgres container interactively with a bash terminal (when its running!) 
docker exec -it pgdb /bin/bash
```

## NPM Logging Packages
- Morgan (HTTP Requwest logger)
- Winston

## NPM Security Packages

- dotenv (Access to environment variables in .env file)
- helmet (Secure headers)
- cSurf (NPM package to help prevent Cross-Site Request Forgery (CSRF) attacks)

## Security related sites
- https://www.owasp.org (Open Web Application Security Project - Security info on different platforms)
- https://www.hacksplaining.com (interactive Security explanations!)
- https://letsencrypt.org (Free  certificates)
- http://httpbin.org (HTTP/S response service - docker image available)
```bash
# Run a local docker image of the HTTP/S response service:
docker run -p 80:80 kennethreitz/httpbin
```

## Encryption Packages
- BCrypt (bcrypt-nodejs)
- Scrypt
- Aragon2
- pgcrypto (Encrypt a few columns for postgres)