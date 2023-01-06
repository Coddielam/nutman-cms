# Nutman cms

GraphQL API available:

- playground only accessible in development mode
- Nginx Proxy Manager available on nutman.link:81 (the port is removed when unused; add it by editing the inbound rules for 'strapi')

Deployed on AWS:

- images are stored in S3
- RDS for database storage
- SSL from Amazon Certificate Manager
- DNS from Amazon Route 53 ($5/year)

public URL: https://cms.nutman.link/admin
