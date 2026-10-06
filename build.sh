set -e
rm -rf dist
mkdir -p dist
cat deploy/chunks/*.b64 | tr -d '\n' | base64 -d > /tmp/elevix-site.tar.gz
tar -xzf /tmp/elevix-site.tar.gz -C dist
test -f dist/index.html
echo "Elevix static site prepared"
