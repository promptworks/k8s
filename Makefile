SOURCES=$(wildcard bin/* gen/*)
SWAGGER=https://raw.githubusercontent.com/kubernetes/kubernetes/v1.13.4/api/openapi-spec/swagger.json

all: src/Kubernetes.ts

build: all
	rm -rf lib
	node_modules/.bin/tsc -b

tmp:
	mkdir tmp

tmp/swagger.json: tmp
	wget -O tmp/swagger.json $(SWAGGER)

src/types/generated.ts: tmp/swagger.json $(SOURCES)
	bin/generate types tmp/swagger.json src/types/generated.ts

src/types/objects.ts: src/types/generated.ts $(SOURCES)
	bin/generate template gen/objects.ejs src/types/objects.ts

.PHONY: src/Kubernetes.ts
src/Kubernetes.ts:
	bin/generate template gen/Kubernetes.ejs src/Kubernetes.ts
