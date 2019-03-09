SOURCES=$(wildcard bin/* gen/*.)
SWAGGER=https://raw.githubusercontent.com/kubernetes/kubernetes/v1.13.4/api/openapi-spec/swagger.json

tmp:
	mkdir tmp

tmp/swagger.json: tmp
	wget -O tmp/swagger.json $(SWAGGER)

src/types/generated.ts: tmp/swagger.json $(SOURCES)
	bin/generate types tmp/swagger.json src/types/generated.ts

types: src/types/generated.ts
